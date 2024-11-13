// Task 1: Declare The Task Array and The Interval ID
const oneTimeTasks = []; // Array to hold one-time tasks
let monitoringTaskId; // Variable to hold the monitoring interval ID

// Task 2: Add One-Time Task Function
function addOneTimeTask(func, delay) {
    oneTimeTasks.push({ func, delay }); // Add task to the one-time tasks array
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks() {
    oneTimeTasks.forEach(task => {
        setTimeout(task.func, task.delay); // Schedule each task based on its delay
    });
}

// Task 4: Start Monitoring Function
function startMonitoring() {
    monitoringTaskId = setInterval(() => {
        console.log("Monitoring in progress...");
    }, 3000); // Print monitoring message every 3 seconds
}

// Task 5: Stop Monitoring Function
function stopMonitoring() {
    clearInterval(monitoringTaskId); // Stop monitoring
    console.log("Monitoring stopped.");
}

// Task 6: Start Countdown Function
function startCountdown(duration) {
    let countdown = duration;
    const countdownId = setInterval(() => {
        if (countdown > 0) {
            console.log(`T-minus ${countdown} seconds`);
            countdown--;
        } else {
            clearInterval(countdownId); // Stop countdown
            console.log("Liftoff!");
        }
    }, 1000); // Decrease countdown every second
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission() {
    console.log("Scheduling pre-launch activities...");

    // Schedule system check
    addOneTimeTask(() => console.log("Performing system check..."), 1000);
    
    // Schedule monitoring to start after 2 seconds
    addOneTimeTask(startMonitoring, 2000);
    
    // Schedule monitoring to stop after 10 seconds
    addOneTimeTask(stopMonitoring, 10000);
    
    // Schedule countdown to start after 12 seconds with a 5-second countdown
    addOneTimeTask(() => startCountdown(5), 12000);

    // Run all scheduled one-time tasks
    runOneTimeTasks();
}

scheduleMission(); // Starts the mission
