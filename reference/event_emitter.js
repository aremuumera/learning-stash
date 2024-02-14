// the event emitter is a module in the node js where by once an occurrence or change,
// we create an emitter that has listeners to listen to the event and do something or perform specific tasks when they are fired off or invoked or called 
const EventEmitter = require('events'); 

// create class
class MyEmitter extends EventEmitter { } // to create an event emitter class which we inherit the properties and methods from the eventEmitter core module

// init or create or instantiate a new emitter or object but we didnt inherit the properties and methods of the event emitter because we are using it direct but if we are to use the event emitter with a third party module we need to inherit and create a blueprint or an instance
const myEmitter = new MyEmitter();


// event listener.... this is the code that listens to an event that has taken place
myEmitter.on('event', () => console.log('Events Fired')); // after it listens to event it print events fired


// init event or invoke the event or fire the event for the task or function to carry out 
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');


// in short note, examples the interacts will the browsers and send some response/ occurrence/clicks/changes which produces series of events,each of this events are listened by the (events listener) and a specific task is added to the each of this event
// therefore, once the function or the task attached to each of the event that is listened to in the events listener is fired the user receives the response or result




// from cgpt


const EventEmitter = require('events'); 

// Create a custom event emitter class
class MyEmitter extends EventEmitter { }

// Instantiate a new emitter object
const myEmitter = new MyEmitter();

// Example 1: Single event listener
myEmitter.on('event', () => console.log('Event Fired'));
myEmitter.emit('event');
// Output: Event Fired

// Example 2: Multiple event listeners
myEmitter.on('event', () => console.log('First Listener'));
myEmitter.on('event', () => console.log('Second Listener'));
myEmitter.emit('event');
// Output:
// First Listener
// Second Listener

// Example 3: Pass arguments with event
myEmitter.on('sum', (a, b) => console.log(`Sum: ${a + b}`));
myEmitter.emit('sum', 5, 3);
// Output: Sum: 8

// Example 4: Remove event listener
const listener = () => console.log('Listener to be removed');
myEmitter.on('remove', listener);
myEmitter.off('remove', listener);
myEmitter.emit('remove');
// No output (listener removed)

// Example 5: Once event listener
myEmitter.once('onceEvent', () => console.log('Once Listener'));
myEmitter.emit('onceEvent');
myEmitter.emit('onceEvent');
// Output: Once Listener

// Example 6: Error event
myEmitter.on('error', (err) => console.error(`Error: ${err.message}`));
myEmitter.emit('error', new Error('Something went wrong'));
// Output: Error: Something went wrong

// Example 7: Event with asynchronous task
myEmitter.on('asyncEvent', async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Async Task Completed');
});
myEmitter.emit('asyncEvent');
// Output: (after 1 second) Async Task Completed

// Example 8: Event chaining
myEmitter.on('chainEvent', () => console.log('First in chain'));
myEmitter.on('chainEvent', () => console.log('Second in chain'));
myEmitter.emit('chainEvent');
// Output:
// First in chain
// Second in chain

// Example 9: Custom event emitter with additional methods
class CustomEmitter extends EventEmitter {
    constructor() {
        super();
        this.message = 'Hello, world!';
    }
    greet() {
        console.log(this.message);
    }
}
const customEmitter = new CustomEmitter();
customEmitter.on('greet', () => customEmitter.greet());
customEmitter.emit('greet');
// Output: Hello, world!

// Example 10: Event emitter with callback parameters
myEmitter.on('callbackEvent', (data, callback) => {
    console.log(`Received data: ${data}`);
    callback('Data processed successfully');
});
myEmitter.emit('callbackEvent', 'Some data', (response) => {
    console.log(response);
});
// Output:
// Received data: Some data
// Data processed successfully

// Repeat the above scenarios with different event names, listener functions, and arguments as needed.


// Example 11: Event with multiple arguments
myEmitter.on('multiArgsEvent', (arg1, arg2, arg3) => {
    console.log(`Arguments: ${arg1}, ${arg2}, ${arg3}`);
});
myEmitter.emit('multiArgsEvent', 'first', 'second', 'third');
// Output: Arguments: first, second, third

// Example 12: Dynamically adding and removing event listeners
function eventHandler() {
    console.log('Dynamic Event Handler');
}
myEmitter.on('dynamicEvent', eventHandler);
myEmitter.emit('dynamicEvent');
myEmitter.off('dynamicEvent', eventHandler);
myEmitter.emit('dynamicEvent');
// Output: Dynamic Event Handler

// Example 13: Get count of listeners for an event
console.log(`Number of listeners for 'event': ${myEmitter.listenerCount('event')}`);

// Example 14: Event emitter with class method
class Greeter extends EventEmitter {
    greet() {
        this.emit('greet', 'Hello');
    }
}
const greeter = new Greeter();
greeter.on('greet', (message) => console.log(message));
greeter.greet();
// Output: Hello

// Example 15: Using EventEmitter with promises
function promiseEmitter() {
    return new Promise((resolve, reject) => {
        myEmitter.on('promiseEvent', (data) => {
            if (data === 'resolve') {
                resolve('Promise resolved');
            } else {
                reject(new Error('Promise rejected'));
            }
        });
    });
}
promiseEmitter().then((result) => console.log(result)).catch((err) => console.error(err.message));
myEmitter.emit('promiseEvent', 'resolve');
// Output: Promise resolved

// Example 16: Async event emitter with async/await
async function asyncEmitter() {
    return new Promise((resolve) => {
        myEmitter.on('asyncEvent', async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            resolve('Async Event Completed');
        });
    });
}
async function handleAsyncEvent() {
    const result = await asyncEmitter();
    console.log(result);
}
handleAsyncEvent();
myEmitter.emit('asyncEvent');
// Output: (after 1 second) Async Event Completed

// Example 17: Event emitter for HTTP server request handling
const http = require('http');
const server = http.createServer((req, res) => {
    myEmitter.emit('request', req, res);
});
myEmitter.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});
server.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Example 18: Event emitter with custom event arguments
myEmitter.on('customEvent', (arg1, arg2, arg3) => {
    console.log(`Custom Event Arguments: ${arg1}, ${arg2}, ${arg3}`);
});
myEmitter.emit('customEvent', 'arg1Value', 'arg2Value', 'arg3Value');
// Output: Custom Event Arguments: arg1Value, arg2Value, arg3Value

// Example 19: Using EventEmitter with file system operations
const fileSystemEmitter = new EventEmitter();
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        fileSystemEmitter.emit('error', err);
    } else {
        fileSystemEmitter.emit('data', data);
    }
});
fileSystemEmitter.on('error', (err) => {
    console.error(`File read error: ${err.message}`);
});
fileSystemEmitter.on('data', (data) => {
    console.log(`File content: ${data}`);
});

// Example 20: Event emitter for handling database operations
const databaseEmitter = new EventEmitter();
function fetchUserData(userId) {
    // Simulating database query
    const user = { id: userId, name: 'John Doe', email: 'john@example.com' };
    databaseEmitter.emit('userData', user);
}
databaseEmitter.on('userData', (user) => {
    console.log('User Data:', user);
});
fetchUserData(123);

// Repeat the above scenarios with different event names, listener functions, and arguments as needed.

// Example 21: Event emitter with error handling for asynchronous task
const errorEmitter = new EventEmitter();
errorEmitter.on('error', (err) => {
    console.error(`Error occurred: ${err.message}`);
});
errorEmitter.emit('error', new Error('Something went wrong'));
// Output: Error occurred: Something went wrong

// Example 22: Event emitter with listener removed after first invocation
const onceEmitter = new EventEmitter();
onceEmitter.once('onceEvent', () => {
    console.log('Listener invoked once');
});
onceEmitter.emit('onceEvent');
onceEmitter.emit('onceEvent');
// Output: Listener invoked once

// Example 23: Using EventEmitter for handling user authentication events
const authEmitter = new EventEmitter();
authEmitter.on('login', (username) => {
    console.log(`${username} logged in`);
});
authEmitter.on('logout', (username) => {
    console.log(`${username} logged out`);
});
authEmitter.emit('login', 'user123');
authEmitter.emit('logout', 'user123');
// Output:
// user123 logged in
// user123 logged out

// Example 24: Event emitter with complex data payload
const complexEmitter = new EventEmitter();
complexEmitter.on('complexEvent', (data) => {
    console.log('Complex Event Data:');
    console.log(data);
});
complexEmitter.emit('complexEvent', { name: 'John', age: 30, city: 'New York' });
// Output:
// Complex Event Data:
// { name: 'John', age: 30, city: 'New York' }

// Example 25: Using EventEmitter for real-time communication in a chat application
const chatEmitter = new EventEmitter();
chatEmitter.on('message', (user, message) => {
    console.log(`[${user}]: ${message}`);
});
chatEmitter.emit('message', 'User1', 'Hello, everyone!');
chatEmitter.emit('message', 'User2', 'Hi there!');
// Output:
// [User1]: Hello, everyone!
// [User2]: Hi there!

// Example 26: Event emitter with callback function passed as an argument
const callbackEmitter = new EventEmitter();
callbackEmitter.on('callbackEvent', (data, callback) => {
    console.log(`Received data: ${data}`);
    callback('Response sent');
});
callbackEmitter.emit('callbackEvent', 'Data payload', (response) => {
    console.log(`Received response: ${response}`);
});
// Output:
// Received data: Data payload
// Received response: Response sent

// Example 27: Using EventEmitter for handling UI events in a web application
const uiEmitter = new EventEmitter();
uiEmitter.on('click', (elementId) => {
    console.log(`Clicked on element with ID: ${elementId}`);
});
uiEmitter.emit('click', 'button1');
uiEmitter.emit('click', 'link2');
// Output:
// Clicked on element with ID: button1
// Clicked on element with ID: link2

// Example 28: Event emitter for handling file upload progress
const uploadEmitter = new EventEmitter();
uploadEmitter.on('progress', (percentage) => {
    console.log(`Upload progress: ${percentage}%`);
});
uploadEmitter.emit('progress', 50);
uploadEmitter.emit('progress', 100);
// Output:
// Upload progress: 50%
// Upload progress: 100%

// Example 29: Event emitter with priority-based event handling
const priorityEmitter = new EventEmitter();
priorityEmitter.on('priorityEvent', () => {
    console.log('Listener with default priority');
});
priorityEmitter.prependListener('priorityEvent', () => {
    console.log('Listener with higher priority');
});
priorityEmitter.emit('priorityEvent');
// Output:
// Listener with higher priority
// Listener with default priority

// Example 30: Using EventEmitter for handling notifications in a messaging app
const notificationEmitter = new EventEmitter();
notificationEmitter.on('notification', (message) => {
    console.log(`New Notification: ${message}`);
});
notificationEmitter.emit('notification', 'You have a new message');
// Output: New Notification: You have a new message

// Repeat the above scenarios with different event names, listener functions, and arguments as needed.


// Example 31: Event emitter for handling server-side events (SSE)
const sseEmitter = new EventEmitter();
sseEmitter.on('sseEvent', (data) => {
    console.log(`Server Sent Event: ${data}`);
});
sseEmitter.emit('sseEvent', 'Server sent data');
// Output: Server Sent Event: Server sent data

// Example 32: Using EventEmitter for logging events in an application
const logEmitter = new EventEmitter();
logEmitter.on('log', (level, message) => {
    console.log(`[${level.toUpperCase()}] ${message}`);
});
logEmitter.emit('log', 'info', 'Informational message');
// Output: [INFO] Informational message

// Example 33: Event emitter for handling progress updates in a task
const progressEmitter = new EventEmitter();
progressEmitter.on('progressUpdate', (progress) => {
    console.log(`Progress update: ${progress}%`);
});
progressEmitter.emit('progressUpdate', 75);
// Output: Progress update: 75%

// Example 34: Using EventEmitter for inter-process communication (IPC)
const ipcEmitter = new EventEmitter();
ipcEmitter.on('message', (data) => {
    console.log(`IPC message received: ${data}`);
});
ipcEmitter.emit('message', 'Hello from another process');
// Output: IPC message received: Hello from another process

// Example 35: Event emitter for handling timeouts and delays
const timeoutEmitter = new EventEmitter();
timeoutEmitter.on('timeout', () => {
    console.log('Timeout occurred');
});
setTimeout(() => {
    timeoutEmitter.emit('timeout');
}, 2000);
// Output: Timeout occurred (after 2 seconds)

// Example 36: Using EventEmitter for state change notifications
const stateEmitter = new EventEmitter();
let currentState = 'idle';
stateEmitter.on('stateChange', (newState) => {
    console.log(`State changed: ${currentState} -> ${newState}`);
    currentState = newState;
});
stateEmitter.emit('stateChange', 'active');
// Output: State changed: idle -> active

// Example 37: Event emitter for handling user interactions in a web application
const interactionEmitter = new EventEmitter();
interactionEmitter.on('click', (element) => {
    console.log(`Clicked on ${element}`);
});
interactionEmitter.emit('click', 'Button');
// Output: Clicked on Button

// Example 38: Using EventEmitter for routing events in a web framework
const routerEmitter = new EventEmitter();
routerEmitter.on('route', (url) => {
    console.log(`Navigated to ${url}`);
});
routerEmitter.emit('route', '/home');
// Output: Navigated to /home

// Example 39: Event emitter for handling authentication events in a web application
const authEmitter = new EventEmitter();
authEmitter.on('login', (user) => {
    console.log(`${user} logged in`);
});
authEmitter.emit('login', 'user123');
// Output: user123 logged in

// Example 40: Using EventEmitter for event-driven programming in game development
const gameEmitter = new EventEmitter();
gameEmitter.on('gameOver', (score) => {
    console.log(`Game over! Final score: ${score}`);
});
gameEmitter.emit('gameOver', 100);
// Output: Game over! Final score: 100

// Example 41: Event emitter for handling database transactions
const dbEmitter = new EventEmitter();
dbEmitter.on('dbQuery', (query) => {
    console.log(`Executing query: ${query}`);
});
dbEmitter.emit('dbQuery', 'SELECT * FROM users');
// Output: Executing query: SELECT * FROM users

// Example 42: Using EventEmitter for custom event-driven workflows
const workflowEmitter = new EventEmitter();
workflowEmitter.on('stepComplete', (step) => {
    console.log(`Workflow step completed: ${step}`);
});
workflowEmitter.emit('stepComplete', 'Step 1');
// Output: Workflow step completed: Step 1

// Example 43: Event emitter for handling file system events
const fileSystemEmitter = new EventEmitter();
fileSystemEmitter.on('fileCreated', (filename) => {
    console.log(`File created: ${filename}`);
});
fileSystemEmitter.emit('fileCreated', 'example.txt');
// Output: File created: example.txt

// Example 44: Using EventEmitter for handling real-time notifications in an application
const notificationEmitter = new EventEmitter();
notificationEmitter.on('notification', (message) => {
    console.log(`New notification: ${message}`);
});
notificationEmitter.emit('notification', 'You have a new message');
// Output: New notification: You have a new message

// Example 45: Event emitter for handling user input events in a CLI application
const userInputEmitter = new EventEmitter();
userInputEmitter.on('input', (input) => {
    console.log(`User input received: ${input}`);
});
userInputEmitter.emit('input', 'Hello, World!');
// Output: User input received: Hello, World!

// Example 46: Using EventEmitter for handling messaging events in a chat application
const chatEmitter = new EventEmitter();
chatEmitter.on('message', (sender, message) => {
    console.log(`[${sender}]: ${message}`);
});
chatEmitter.emit('message', 'User1', 'Hello, everyone!');
// Output: [User1]: Hello, everyone!

// Example 47: Event emitter for handling data synchronization events
const syncEmitter = new EventEmitter();
syncEmitter.on('syncComplete', (source) => {
    console.log(`Data synchronized from ${source}`);
});
syncEmitter.emit('syncComplete', 'Server');
// Output: Data synchronized from Server

// Example 48: Using EventEmitter for handling WebSocket events in a real-time application
const wsEmitter = new EventEmitter();
wsEmitter.on('message', (data) => {
    console.log(`WebSocket message received: ${data}`);
});
wsEmitter.emit('message', 'Hello from WebSocket');
// Output: WebSocket message received: Hello from WebSocket

// Example 49: Event emitter for handling timer events in an application
const timerEmitter = new EventEmitter();
timerEmitter.on('timerComplete', () => {
    console.log('Timer completed');
});
setTimeout(() => {
    timerEmitter.emit('timerComplete');
}, 5000);
// Output: Timer completed (after 5 seconds)

// Example 50: Using EventEmitter for handling task scheduling events
const schedulerEmitter = new EventEmitter();
schedulerEmitter.on('taskScheduled', (task) => {
    console.log(`Task scheduled: ${task}`);
});
schedulerEmitter.emit('taskScheduled', 'Backup');
// Output: Task scheduled: Backup

// Repeat the above scenarios with different event names, listener functions, and arguments as needed.


// Example 51: Event emitter for handling error logging
const errorLogger = new EventEmitter();
errorLogger.on('error', (errorMessage) => {
    console.error(`Error occurred: ${errorMessage}`);
});
errorLogger.emit('error', 'Critical error: Database connection failed');
// Output: Error occurred: Critical error: Database connection failed

// Example 52: Using EventEmitter for sending email notifications
const emailNotifier = new EventEmitter();
emailNotifier.on('sendEmail', (recipient, subject) => {
    console.log(`Email sent to ${recipient} with subject: ${subject}`);
});
emailNotifier.emit('sendEmail', 'user@example.com', 'New message received');
// Output: Email sent to user@example.com with subject: New message received

// Example 53: Event emitter for handling status updates in a monitoring system
const statusEmitter = new EventEmitter();
statusEmitter.on('statusUpdate', (component, status) => {
    console.log(`Status update for ${component}: ${status}`);
});
statusEmitter.emit('statusUpdate', 'Server', 'Online');
// Output: Status update for Server: Online

// Example 54: Using EventEmitter for sending SMS notifications
const smsNotifier = new EventEmitter();
smsNotifier.on('sendSMS', (phoneNumber, message) => {
    console.log(`SMS sent to ${phoneNumber}: ${message}`);
});
smsNotifier.emit('sendSMS', '+1234567890', 'Your order has been shipped');
// Output: SMS sent to +1234567890: Your order has been shipped

// Example 55: Event emitter for handling payment notifications
const paymentEmitter = new EventEmitter();
paymentEmitter.on('paymentReceived', (amount, currency) => {
    console.log(`Payment received: ${amount} ${currency}`);
});
paymentEmitter.emit('paymentReceived', 100, 'USD');
// Output: Payment received: 100 USD

// Example 56: Using EventEmitter for sending push notifications
const pushNotifier = new EventEmitter();
pushNotifier.on('sendPushNotification', (deviceToken, message) => {
    console.log(`Push notification sent to ${deviceToken}: ${message}`);
});
pushNotifier.emit('sendPushNotification', 'abcdef123456', 'New updates available');
// Output: Push notification sent to abcdef123456: New updates available

// Example 57: Event emitter for handling authentication events in a web service
const authService = new EventEmitter();
authService.on('loginSuccess', (user) => {
    console.log(`User ${user} logged in successfully`);
});
authService.emit('loginSuccess', 'user123');
// Output: User user123 logged in successfully

// Example 58: Using EventEmitter for scheduling reminders
const reminderEmitter = new EventEmitter();
reminderEmitter.on('reminderSet', (task, time) => {
    console.log(`Reminder set for ${task} at ${time}`);
});
reminderEmitter.emit('reminderSet', 'Meeting', '10:00 AM');
// Output: Reminder set for Meeting at 10:00 AM

// Example 59: Event emitter for handling cache invalidation events
const cacheEmitter = new EventEmitter();
cacheEmitter.on('invalidateCache', (key) => {
    console.log(`Cache invalidated for key: ${key}`);
});
cacheEmitter.emit('invalidateCache', 'user123');
// Output: Cache invalidated for key: user123

// Example 60: Using EventEmitter for triggering analytics events
const analyticsEmitter = new EventEmitter();
analyticsEmitter.on('logEvent', (eventName, data) => {
    console.log(`Analytics event logged: ${eventName}`);
});
analyticsEmitter.emit('logEvent', 'UserSignUp', { username: 'user123', age: 25 });
// Output: Analytics event logged: UserSignUp

// Example 61: Event emitter for handling task completion notifications
const taskEmitter = new EventEmitter();
taskEmitter.on('taskComplete', (taskName) => {
    console.log(`Task "${taskName}" completed successfully`);
});
taskEmitter.emit('taskComplete', 'Data backup');
// Output: Task "Data backup" completed successfully

// Example 62: Using EventEmitter for sending notification alerts
const alertEmitter = new EventEmitter();
alertEmitter.on('sendAlert', (severity, message) => {
    console.log(`Alert (${severity}): ${message}`);
});
alertEmitter.emit('sendAlert', 'Critical', 'Server outage detected');
// Output: Alert (Critical): Server outage detected

// Example 63: Event emitter for handling user activity events in an application
const activityEmitter = new EventEmitter();
activityEmitter.on('activityLog', (user, action) => {
    console.log(`User ${user} performed action: ${action}`);
});
activityEmitter.emit('activityLog', 'user123', 'Updated profile');
// Output: User user123 performed action: Updated profile

// Example 64: Using EventEmitter for tracking inventory updates
const inventoryEmitter = new EventEmitter();
inventoryEmitter.on('inventoryUpdate', (product, quantity) => {
    console.log(`Inventory updated for ${product}: ${quantity}`);
});
inventoryEmitter.emit('inventoryUpdate', 'Apples', 100);
// Output: Inventory updated for Apples: 100

// Example 65: Event emitter for handling notifications in an alerting system
const alertingSystem = new EventEmitter();
alertingSystem.on('notification', (severity, message) => {
    console.log(`[${severity.toUpperCase()}] ${message}`);
});
alertingSystem.emit('notification', 'warning', 'Disk space running low');
// Output: [WARNING] Disk space running low

// Example 66: Using EventEmitter for sending transactional emails
const transactionalEmails = new EventEmitter();
transactionalEmails.on('sendEmail', (recipient, subject) => {
    console.log(`Transactional email sent to ${recipient} with subject: ${subject}`);
});
transactionalEmails.emit('sendEmail', 'user@example.com', 'Order confirmation');
// Output: Transactional email sent to user@example.com with subject: Order confirmation

// Example 67: Event emitter for handling event logging in an application
const eventLogger = new EventEmitter();
eventLogger.on('logEvent', (eventData) => {
    console.log(`Event logged: ${eventData}`);
});
eventLogger.emit('logEvent', 'User clicked on homepage');
// Output: Event logged: User clicked on homepage

// Example 68: Using EventEmitter for sending notifications to mobile devices
const mobileNotifier = new EventEmitter();
mobileNotifier.on('sendNotification', (deviceID, message) => {
    console.log(`Notification sent to device ${deviceID}: ${message}`);
});
mobileNotifier.emit('sendNotification', 'android123', 'New message received');
// Output: Notification sent to device android123: New message received

// Example 69: Event emitter for handling backup events in a system
const backupEmitter = new EventEmitter();
backupEmitter.on('backupComplete', (type, timestamp) => {
    console.log(`Backup (${type}) completed at ${timestamp}`);
});
backupEmitter.emit('backupComplete', 'Database', new Date().toLocaleString());
// Output: Backup (Database) completed at [current timestamp]

// Example 70: Using EventEmitter for sending alerts in a monitoring application
const monitoringAlerts = new EventEmitter();
monitoringAlerts.on('alert', (severity, message) => {
    console.log(`[ALERT ${severity.toUpperCase()}] ${message}`);
});
monitoringAlerts.emit('alert', 'critical', 'Server CPU usage exceeds 90%');
// Output: [ALERT CRITICAL] Server CPU usage exceeds 90%

// Example 71: Event emitter for handling user registration events
const registrationEmitter = new EventEmitter();
registrationEmitter.on('userRegistered', (username) => {
    console.log(`New user registered: ${username}`);
});
registrationEmitter.emit('userRegistered', 'user456');
// Output: New user registered: user456

// Example 72: Using EventEmitter for sending notifications in a social networking app
const socialNotifier = new EventEmitter();
socialNotifier.on('sendNotification', (user, message) => {
    console.log(`Notification sent to ${user}: ${message}`);
});
socialNotifier.emit('sendNotification', 'friend123', 'You have a new friend request');
// Output: Notification sent to friend123: You have a new friend request

// Example 73: Event emitter for handling user logout events
const logoutEmitter = new EventEmitter();
logoutEmitter.on('userLoggedOut', (username) => {
    console.log(`User ${username} logged out`);
});
logoutEmitter.emit('userLoggedOut', 'user789');
// Output: User user789 logged out

// Example 74: Using EventEmitter for sending event reminders
const eventReminder = new EventEmitter();
eventReminder.on('reminder', (event, time) => {
    console.log(`Reminder: ${event} at ${time}`);
});
eventReminder.emit('reminder', 'Meeting', '2:00 PM');
// Output: Reminder: Meeting at 2:00 PM

// Example 75: Event emitter for handling subscription events
const subscriptionEmitter = new EventEmitter();
subscriptionEmitter.on('subscriptionUpdate', (user, plan) => {
    console.log(`Subscription updated for ${user}: ${plan}`);
});
subscriptionEmitter.emit('subscriptionUpdate', 'user123', 'Premium');
// Output: Subscription updated for user123: Premium

// Example 76: Using EventEmitter for sending notifications in an IoT application
const iotNotifier = new EventEmitter();
iotNotifier.on('sendNotification', (deviceID, message) => {
    console.log(`Notification sent to device ${deviceID}: ${message}`);
});
iotNotifier.emit('sendNotification', 'device1', 'Temperature exceeded threshold');
// Output: Notification sent to device device1: Temperature exceeded threshold

// Example 77: Event emitter for handling order processing events
const orderProcessor = new EventEmitter();
orderProcessor.on('orderProcessed', (orderId) => {
    console.log(`Order processed: ${orderId}`);
});
orderProcessor.emit('orderProcessed', 'ORD12345');
// Output: Order processed: ORD12345

// Example 78: Using EventEmitter for sending notifications in a ticketing system
const ticketNotifier = new EventEmitter();
ticketNotifier.on('sendNotification', (ticketId, message) => {
    console.log(`Notification sent for ticket ${ticketId}: ${message}`);
});
ticketNotifier.emit('sendNotification', 'TICKET123', 'New update on ticket status');
// Output: Notification sent for ticket TICKET123: New update on ticket status

// Example 79: Event emitter for handling user preference updates
const preferenceEmitter = new EventEmitter();
preferenceEmitter.on('preferenceUpdated', (user, preference) => {
    console.log(`User ${user} updated preference: ${preference}`);
});
preferenceEmitter.emit('preferenceUpdated', 'user789', 'Theme: Dark Mode');
// Output: User user789 updated preference: Theme: Dark Mode

// Example 80: Using EventEmitter for sending alerts in a security system
const securityAlerts = new EventEmitter();
securityAlerts.on('alert', (severity, message) => {
    console.log(`[SECURITY ${severity.toUpperCase()}] ${message}`);
});
securityAlerts.emit('alert', 'critical', 'Unauthorized access detected');
// Output: [SECURITY CRITICAL] Unauthorized access detected

// Example 81: Event emitter for handling product updates in an e-commerce platform
const productEmitter = new EventEmitter();
productEmitter.on('productUpdated', (productId, price) => {
    console.log(`Product ${productId} updated: Price ${price}`);
});
productEmitter.emit('productUpdated', 'PROD123', '$99.99');
// Output: Product PROD123 updated: Price $99.99

// Example 82: Using EventEmitter for sending notifications in a task management app
const taskNotifier = new EventEmitter();
taskNotifier.on('sendNotification', (user, message) => {
    console.log(`Notification sent to ${user}: ${message}`);
});
taskNotifier.emit('sendNotification', 'user123', 'Task deadline approaching');
// Output: Notification sent to user123: Task deadline approaching

// Example 83: Event emitter for handling video playback events in a media player
const videoPlayerEmitter = new EventEmitter();
videoPlayerEmitter.on('playbackEvent', (event, time) => {
    console.log(`Video playback event: ${event} at ${time}`);
});
videoPlayerEmitter.emit('playbackEvent', 'Pause', '01:23');
// Output: Video playback event: Pause at 01:23

// Example 84: Using EventEmitter for sending notifications in a weather monitoring system
const weatherNotifier = new EventEmitter();
weatherNotifier.on('sendNotification', (location, condition) => {
    console.log(`Weather notification for ${location}: ${condition}`);
});
weatherNotifier.emit('sendNotification', 'New York', 'Sunny');
// Output: Weather notification for New York: Sunny

// Example 85: Event emitter for handling progress updates in a file upload process
const uploadProgressEmitter = new EventEmitter();
uploadProgressEmitter.on('progressUpdate', (progress) => {
    console.log(`Upload progress: ${progress}%`);
});
uploadProgressEmitter.emit('progressUpdate', 50);
// Output: Upload progress: 50%

// Example 86: Using EventEmitter for sending notifications in a healthcare system
const healthNotifier = new EventEmitter();
healthNotifier.on('sendNotification', (patient, message) => {
    console.log(`Health notification for ${patient}: ${message}`);
});
healthNotifier.emit('sendNotification', 'John Doe', 'Medication reminder');
// Output: Health notification for John Doe: Medication reminder

// Example 87: Event emitter for handling file download events in a cloud storage system
const fileDownloadEmitter = new EventEmitter();
fileDownloadEmitter.on('downloadEvent', (file, size) => {
    console.log(`File download event: ${file} (${size} MB)`);
});
fileDownloadEmitter.emit('downloadEvent', 'Document.pdf', 5.2);
// Output: File download event: Document.pdf (5.2 MB)

// Example 88: Using EventEmitter for sending notifications in a news application
const newsNotifier = new EventEmitter();
newsNotifier.on('sendNotification', (user, headline) => {
    console.log(`Notification sent to ${user}: ${headline}`);
});
newsNotifier.emit('sendNotification', 'user123', 'Breaking news: Earthquake reported');
// Output: Notification sent to user123: Breaking news: Earthquake reported

// Example 89: Event emitter for handling comment notifications in a social media platform
const commentNotifier = new EventEmitter();
commentNotifier.on('commentNotification', (post, commenter) => {
    console.log(`New comment on post ${post} by ${commenter}`);
});
commentNotifier.emit('commentNotification', 'Post123', 'user456');
// Output: New comment on post Post123 by user456

// Example 90: Using EventEmitter for sending notifications in a gaming application
const gameNotifier = new EventEmitter();
gameNotifier.on('sendNotification', (player, message) => {
    console.log(`Notification sent to player ${player}: ${message}`);
});
gameNotifier.emit('sendNotification', 'player1', 'New quest available');
// Output: Notification sent to player player1: New quest available

// Example 91: Event emitter for handling event reminders in a calendar app
const calendarEmitter = new EventEmitter();
calendarEmitter.on('reminder', (event, time) => {
    console.log(`Reminder: ${event} at ${time}`);
});
calendarEmitter.emit('reminder', 'Meeting', '10:00 AM');
// Output: Reminder: Meeting at 10:00 AM

// Example 92: Using EventEmitter for sending notifications in a flight booking system
const flightNotifier = new EventEmitter();
flightNotifier.on('sendNotification', (passenger, message) => {
    console.log(`Notification sent to ${passenger}: ${message}`);
});
flightNotifier.emit('sendNotification', 'passenger123', 'Flight departure reminder');
// Output: Notification sent to passenger123: Flight departure reminder

// Example 93: Event emitter for handling document updates in a collaboration tool
const documentEmitter = new EventEmitter();
documentEmitter.on('documentUpdate', (documentId, user) => {
    console.log(`Document ${documentId} updated by ${user}`);
});
documentEmitter.emit('documentUpdate', 'Doc123', 'user789');
// Output: Document Doc123 updated by user789

// Example 94: Using EventEmitter for sending notifications in a fitness app
const fitnessNotifier = new EventEmitter();
fitnessNotifier.on('sendNotification', (user, message) => {
    console.log(`Notification sent to ${user}: ${message}`);
});
fitnessNotifier.emit('sendNotification', 'user123', 'Daily workout reminder');
// Output: Notification sent to user123: Daily workout reminder

// Example 95: Event emitter for handling event reminders in a task scheduler
const taskSchedulerEmitter = new EventEmitter();
taskSchedulerEmitter.on('reminder', (task, time) => {
    console.log(`Reminder: ${task} at ${time}`);
});
taskSchedulerEmitter.emit('reminder', 'Meeting', '3:00 PM');
// Output: Reminder: Meeting at 3:00 PM

// Example 96: Using EventEmitter for sending notifications in a transportation app
const transportationNotifier = new EventEmitter();
transportationNotifier.on('sendNotification', (user, message) => {
    console.log(`Notification sent to ${user}: ${message}`);
});
transportationNotifier.emit('sendNotification', 'user123', 'Ride booking confirmation');
// Output: Notification sent to user123: Ride booking confirmation

// Example 97: Event emitter for handling event reminders in a to-do list app
const todoEmitter = new EventEmitter();
todoEmitter.on('reminder', (task, time) => {
    console.log(`Reminder: ${task} at ${time}`);
});
todoEmitter.emit('reminder', 'Shopping', '5:00 PM');
// Output: Reminder: Shopping at 5:00 PM

// Example 98: Using EventEmitter for sending notifications in a travel booking app
const travelNotifier = new EventEmitter();
travelNotifier.on('sendNotification', (user, message) => {
    console.log(`Notification sent to ${user}: ${message}`);
});
travelNotifier.emit('sendNotification', 'user123', 'Flight booking confirmed');
// Output: Notification sent to user123: Flight booking confirmed

// Example 99: Event emitter for handling event notifications in a chat application
const chatEmitter = new EventEmitter();
chatEmitter.on('messageReceived', (sender, message) => {
    console.log(`New message from ${sender}: ${message}`);
});
chatEmitter.emit('messageReceived', 'friend123', 'How are you?');
// Output: New message from friend123: How are you?

// Example 100: Using EventEmitter for sending notifications in a weather app
const weatherNotifier = new EventEmitter();
weatherNotifier.on('sendNotification', (user, message) => {
    console.log(`Notification sent to ${user}: ${message}`);
});
weatherNotifier.emit('sendNotification', 'user123', 'Rain alert for your area');
// Output: Notification sent to user123: Rain alert for your area


// Example 101: Event emitter for handling stock price updates
const stockEmitter = new EventEmitter();
stockEmitter.on('stockUpdate', (symbol, price) => {
    console.log(`Stock ${symbol} updated: Price ${price}`);
});
stockEmitter.emit('stockUpdate', 'AAPL', '$150.25');
// Output: Stock AAPL updated: Price $150.25

// Example 102: Using EventEmitter for sending notifications in a flight tracking app
const flightTracker = new EventEmitter();
flightTracker.on('sendNotification', (user, message) => {
    console.log(`Notification sent to ${user}: ${message}`);
});
flightTracker.emit('sendNotification', 'user123', 'Flight delay alert');
// Output: Notification sent to user123: Flight delay alert

// Example 103: Event emitter for handling task assignment in a project management tool
const taskAssignmentEmitter = new EventEmitter();
taskAssignmentEmitter.on('taskAssigned', (task, assignee) => {
    console.log(`Task ${task} assigned to ${assignee}`);
});
taskAssignmentEmitter.emit('taskAssigned', 'Bug fix', 'developer123');
// Output: Task Bug fix assigned to developer123

// Example 104: Using EventEmitter for sending notifications in a ride-sharing app
const rideNotifier = new EventEmitter();
rideNotifier.on('sendNotification', (user, message) => {
    console.log(`Notification sent to ${user}: ${message}`);
});
rideNotifier.emit('sendNotification', 'user123', 'Ride request accepted');
// Output: Notification sent to user123: Ride request accepted

// Example 105: Event emitter for handling product alerts in an e-commerce platform
const productAlertEmitter = new EventEmitter();
productAlertEmitter.on('productAlert', (product, price) => {
    console.log(`Product alert: ${product} price dropped to ${price}`);
});
productAlertEmitter.emit('productAlert', 'Laptop', '$999');
// Output: Product alert: Laptop price dropped to $999

// Example 106: Using EventEmitter for sending notifications in a food delivery app
const foodDeliveryNotifier = new EventEmitter();
foodDeliveryNotifier.on('sendNotification', (user, message) => {
    console.log(`Notification sent to ${user}: ${message}`);
});
foodDeliveryNotifier.emit('sendNotification', 'user123', 'Order delivered');
// Output: Notification sent to user123: Order delivered

// Example 107: Event emitter for handling appointment reminders in a scheduling application
const appointmentEmitter = new EventEmitter();
appointmentEmitter.on('reminder', (appointment, time) => {
    console.log(`Appointment reminder: ${appointment} at ${time}`);
});
appointmentEmitter.emit('reminder', 'Dentist appointment', '9:00 AM');
// Output: Appointment reminder: Dentist appointment at 9:00 AM

// Example 108: Using EventEmitter for sending notifications in a package tracking system
const packageNotifier = new EventEmitter();
packageNotifier.on('sendNotification', (user, message) => {
    console.log(`Notification sent to ${user}: ${message}`);
});
packageNotifier.emit('sendNotification', 'user123', 'Package out for delivery');
// Output: Notification sent to user123: Package out for delivery

// Example 109: Event emitter for handling job application events in a recruitment platform
const jobApplicationEmitter = new EventEmitter();
jobApplicationEmitter.on('applicationReceived', (jobTitle, applicant) => {
    console.log(`New application received for ${jobTitle} from ${applicant}`);
});
jobApplicationEmitter.emit('applicationReceived', 'Software Engineer', 'John Doe');
// Output: New application received for Software Engineer from John Doe

// Example 110: Using EventEmitter for sending notifications in a stock trading app
const tradingNotifier = new EventEmitter();
tradingNotifier.on('sendNotification', (user, message) => {
    console.log(`Notification sent to ${user}: ${message}`);
});
tradingNotifier.emit('sendNotification', 'user123', 'Stock price alert');
// Output: Notification sent to user123: Stock price alert

// Example 111: Event emitter for handling file update events in a document management system
const fileUpdateEmitter = new EventEmitter();
fileUpdateEmitter.on('fileUpdated', (file, user) => {
    console.log(`File ${file} updated by ${user}`);
});
fileUpdateEmitter.emit('fileUpdated', 'Document.docx', 'user789');
// Output: File Document.docx updated by user789

// Example 112: Using EventEmitter for sending notifications in a parcel delivery app
const parcelNotifier = new EventEmitter();
parcelNotifier.on('sendNotification', (user, message) => {
    console.log(`Notification sent to ${user}: ${message}`);
});
parcelNotifier.emit('sendNotification', 'user123', 'Parcel dispatched');
// Output: Notification sent to user123: Parcel dispatched

// Example 113: Event emitter for handling inventory restocking events
const restockEmitter = new EventEmitter();
restockEmitter.on('restock', (product, quantity) => {
    console
