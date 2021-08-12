# Calendar events

## Interface declaration

```
{"name": "system.calendar"}
```

## Import module

```
import calendar from '@system.calendar' or var barcode = require("@system.calendar")
```

## Interface definition

### calendar.insert(OBJECT)

Insert calendar events

#### Parameters:

| Parameter name | Type     | Required                 | Description                              |
| -------------- | -------- | ------------------------ | ---------------------------------------- |
| title          | String   | Yes                      | The title of the event                   |
| description    | String   | No                       | Description of the event                 |
| startDate      | long     | Yes                      | Event start time, uses UTC from the year 0 AD in milliseconds |
| endDate        | long     | Yes                      | Event end time, uses UTC from the year 0 AD in milliseconds |
| timezone       | String   | No                       | Time zone of the event                   |
| allDay         | boolean  | No                       | True means this event takes up a whole day (as defined by the local time zone). False means it's a regular event, it can start and end at any time within 1 day |
| rrule          | String   | Yes, for repeated events | Rule format for recurring events. E.g., `FREQ=WEEKLY;COUNT=10;WKST=SU". You can find more examples here` |
| remindMinutes  | Array    | No                       | Remind a few minutes before the event starts. E.g.: [5, 15, 30] |
| organizer      | String   | No                       | Email of the event organizer (owner)     |
| success        | Function | No                       | Callback succeeded, returns the inserted ID |
| fail           | Function | No                       | Couldn't return callback                 |
| cancel         | Function | No                       | Cancel callback                          |

##### Fail return error code `101+`

| Error code | Description                              |
| ---------- | ---------------------------------------- |
| 201        | User denied permission, couldn't get write calendar permission |

#### Example:

```
calendar.insert({
    title:"eventＡ",
    startDate:"1490770543000",
    endDate:"1490880543000",
    remindMinutes:[5,15,30],
    duration:"PT1H",
    rrule:"FREQ=WEEKLY;COUNT=２",
    success:function(data){console.log("handling success");}
})
```