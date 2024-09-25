import { PubSubManager } from "./PubSubManager";

let subscribedUsers = ["user1", "user2", "user3", "user4", "user5"];

// setInterval(() => {
//     subscribedUsers.map((user) => {
//         PubSubManager.getInstance().userSubscribe(user, "APPL");
//     })
//     // PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
// }, 5000);

subscribedUsers.map((user) => {
    PubSubManager.getInstance().userSubscribe(user, "APPL");
})

setTimeout(() => {
    subscribedUsers.map((user) => {
        PubSubManager.getInstance().userUnSubscribe(user, "APPL");
    })
}, 50000);

