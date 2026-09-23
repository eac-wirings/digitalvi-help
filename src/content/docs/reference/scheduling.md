---
title: Scheduling
description: How playlist and layout schedules work in Studio, including where to set them, time ranges, daily, weekly and monthly recurrence, date ranges, priority and fallbacks.
---

Schedules decide **what plays when**. The same schedule editor appears in several places, and they stack on
top of each other.

## Where schedules can be set

| Level | Where | Applies to |
| --- | --- | --- |
| Layout zone | [Layouts → Zones → Edit schedules](/players/layouts/#zone-schedules) | Every player using that layout. |
| Playlist group | [Playlist groups](/playlists/playlist-groups/) | Every player in the group and its child groups. |
| Player (direct) | [Player → Playlist schedules / Layout schedules](/players/player-details/#playlist-schedules) | One player only. Overrides the levels above. |
| Fallback | [Playlist group → Fallback playlist / Fallback layout](/playlists/playlist-groups/#fallback-playlist) | Used whenever nothing else is scheduled. |

All times use the **time zone of the player's [location](/players/locations/#location-fields)**.

## Schedule rows

Each schedule is a row in a table:

| Column | Description |
| --- | --- |
| Playlist / Layout | What to play. |
| Time from / Time to | The daily time window, for example 08:00 to 12:00. |
| Day | The recurrence (see below). Click it to edit. |
| Date from / Date to | Optional start and end dates for the whole schedule, for example a campaign that runs 1–31 December. |
| Priority | **Low**, **Medium** or **High**. When two schedules overlap, the higher priority wins. |

Add rows, change them, then click **Save**. **Back** leaves without saving. The calendar above the table
(**< Today >**) previews what will play on each day.

## Recurrence options

Clicking a row's **Day** opens the recurrence dialog:

| Setting | Options |
| --- | --- |
| Time from / Time to | The time window. |
| Play only one time | Play once in the window instead of looping. |
| **Daily** | **Every day**, **Every weekday** (Mon–Fri) or **Every weekend** (Sat–Sun). |
| **Weekly** | **Recur every _N_ week(s) on:** tick any of Sunday to Saturday. |
| **Monthly** | **Day _D_ of every _N_ month(s)**, or **The** *first / second / third / fourth / last* *day / weekday / weekend day / Sunday … Saturday* **of every _N_ month(s)**. |
| Date from / Date to | Limits the recurrence to a date range. |

### Examples

| Goal | Settings |
| --- | --- |
| Breakfast menu every morning | Daily → Every day, 06:00–11:00 |
| Weekend promotion | Daily → Every weekend, all day |
| Staff meeting slide every other Monday | Weekly → every **2** weeks on **Monday** |
| Payday offer | Monthly → Day **15** of every **1** month |
| Last-Friday event | Monthly → **The last Friday** of every **1** month |
| Holiday campaign | Any recurrence + Date from 2026-12-01, Date to 2026-12-31 |

## How Studio decides what plays

1. A running **event playlist** (triggered on demand) plays first. See [Event playlists](/playlists/playlist-groups/#event-playlists).
2. Otherwise, of the schedules active right now, **direct player schedules** win over group and layout
   schedules, and **higher priority** wins over lower.
3. If nothing is scheduled, the **fallback playlist** and **fallback layout** of the player's group are used.

:::tip
Always give every playlist group a fallback playlist, so screens never go blank between schedules.
:::
