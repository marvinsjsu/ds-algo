/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (intervals.length === 0) return 0;
    intervals.sort(sorting);

    let rooms = [];
    let currMeeting, currInterval, meetingQueue, meetings;

    while (intervals.length) {
        currInterval = intervals.shift();
        if (rooms.length === 0) {
            rooms.push([currInterval]);
        } else {
            let added = false;
            for (let i = 0; i < rooms.length; i++) {
                if (!roomConflict(rooms[i], currInterval)) {
                    rooms[i].push(currInterval);
                    added = true;
                    break;
                }
            }
            if (!added) {
                rooms.push([currInterval]);
            }
        }
    }

    return rooms.length;
};

function conflicting (meetingA, meetingB) {
    if (meetingA[0] >= meetingB[0] && meetingA[0] < meetingB[1]) return true;
    if (meetingA[1] >= meetingB[0] && meetingA[1] < meetingB[1]) return true;
    return false;
}

function sorting (meetingA, meetingB) {
    let durationA = meetingA[1] - meetingA[0];
    let durationB = meetingB[1] - meetingB[0];
    return (meetingA[0] - meetingB[0]) || (durationA - durationB);
}

function roomConflict (room, interval) {
    let meetings = room;

    for (let i = 0; i < meetings.length; i++) {
        if (conflicting(interval, meetings[i])) return true;
    }

    return false;
}
