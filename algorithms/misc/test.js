// const mysql = require('mysql2/promise');
//
// // Create a connection to the MySQL database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'your_username',
//     password: 'your_password',
//     database: 'your_database_name',
// });
//
// // Function to create tables if they don't exist
// TODO: the following code is replaceable with the schemas
//-----------------------------------------------------------------------------
// async function createTables() {
//     try {
//         const createUserTableSQL = `
//             CREATE TABLE IF NOT EXISTS users (
//                 id INT AUTO_INCREMENT PRIMARY KEY,
//                 username VARCHAR(255) NOT NULL
//             )
//         `;
//         const createFriendRequestTableSQL = `
//             CREATE TABLE IF NOT EXISTS friend_requests (
//                 id INT AUTO_INCREMENT PRIMARY KEY,
//                 sender_id INT NOT NULL,
//                 receiver_id INT NOT NULL,
//                 FOREIGN KEY (sender_id) REFERENCES users(id),
//                 FOREIGN KEY (receiver_id) REFERENCES users(id)
//             )
//         `;
//         const createFriendshipTableSQL = `
//             CREATE TABLE IF NOT EXISTS friendships (
//                 id INT AUTO_INCREMENT PRIMARY KEY,
//                 user1_id INT NOT NULL,
//                 user2_id INT NOT NULL,
//                 FOREIGN KEY (user1_id) REFERENCES users(id),
//                 FOREIGN KEY (user2_id) REFERENCES users(id)
//             )
//         `;
//
//         await connection.execute(createUserTableSQL);
//         await connection.execute(createFriendRequestTableSQL);
//         await connection.execute(createFriendshipTableSQL);
//
//         console.log('Tables created successfully.');
//     } catch (error) {
//         console.error('Error creating tables:', error);
//     }
// }
//
// // Function to send a friend request
// async function sendFriendRequest(senderId, receiverId) {
//     try {
//         const insertRequestSQL = 'INSERT INTO friend_requests (sender_id, receiver_id) VALUES (?, ?)';
//         await connection.execute(insertRequestSQL, [senderId, receiverId]);
//         console.log('Friend request sent.');
//     } catch (error) {
//         console.error('Error sending friend request:', error);
//     }
// }
//
// // Function to accept a friend request
// async function acceptFriendRequest(senderId, receiverId) {
//     try {
//         const insertFriendshipSQL = 'INSERT INTO friendships (user1_id, user2_id) VALUES (?, ?)';
//         await connection.execute(insertFriendshipSQL, [senderId, receiverId]);
//         await connection.execute(insertFriendshipSQL, [receiverId, senderId]);
//
//         const deleteRequestSQL = 'DELETE FROM friend_requests WHERE sender_id = ? AND receiver_id = ?';
//         await connection.execute(deleteRequestSQL, [senderId, receiverId]);
//
//         console.log('Friend request accepted.');
//     } catch (error) {
//         console.error('Error accepting friend request:', error);
//     }
// }
//
// // Function to cancel a friend request
// async function cancelFriendRequest(senderId, receiverId) {
//     try {
//         const deleteRequestSQL = 'DELETE FROM friend_requests WHERE sender_id = ? AND receiver_id = ?';
//         await connection.execute(deleteRequestSQL, [senderId, receiverId]);
//         console.log('Friend request canceled.');
//     } catch (error) {
//         console.error('Error canceling friend request:', error);
//     }
// }
//
// // Example usage:
// (async () => {
//     try {
//         await createTables();
//
//         // Insert users into the users table
//         const [user1] = await connection.execute('INSERT INTO users (username) VALUES (?)', ['Alice']);
//         const [user2] = await connection.execute('INSERT INTO users (username) VALUES (?)', ['Bob']);
//
//         // Send a friend request from user1 to user2
//         await sendFriendRequest(user1.insertId, user2.insertId);
//
//         // Accept the friend request
//         await acceptFriendRequest(user2.insertId, user1.insertId);
//
//         // Cancel a friend request
//         await cancelFriendRequest(user1.insertId, user2.insertId);
//
//         connection.end();
//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();

// Function to retrieve a user's friends
// async function getFriends(userId) {
//     try {
//         const selectFriendsSQL = `
//             SELECT u.id, u.username
//             FROM friendships f
//             INNER JOIN users u ON (f.user2_id = u.id)
//             WHERE f.user1_id = ?
//         `;
//         const [rows] = await connection.execute(selectFriendsSQL, [userId]);
//         return rows;
//     } catch (error) {
//         console.error('Error retrieving friends:', error);
//         return [];
//     }
// }
//
// // Example usage:
// (async () => {
//     try {
//         await createTables();
//
//         // Insert users into the users table
//         const [user1] = await connection.execute('INSERT INTO users (username) VALUES (?)', ['Alice']);
//         const [user2] = await connection.execute('INSERT INTO users (username) VALUES (?)', ['Bob']);
//         const [user3] = await connection.execute('INSERT INTO users (username) VALUES (?)', ['Charlie']);
//
//         // Send friend requests and accept them
//         await sendFriendRequest(user1.insertId, user2.insertId);
//         await acceptFriendRequest(user2.insertId, user1.insertId);
//         await sendFriendRequest(user1.insertId, user3.insertId);
//         await acceptFriendRequest(user3.insertId, user1.insertId);
//
//         // Get user1's friends
//         const user1Friends = await getFriends(user1.insertId);
//         console.log("User1's friends:", user1Friends);
//
//         connection.end();
//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();
