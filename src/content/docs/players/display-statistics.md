---
title: Display statistics (proof of play)
description: Report how often and how long each media file played on each player, and export proof-of-play statistics.
sidebar:
  label: Display statistics
---

**Where:** Players → Display statistics (`/playStatistics`)

Display statistics (also called **proof of play**) show how many times, and for how long, each file played on
each player. Use them to prove to advertisers that their content ran.

![Display statistics](/screenshots/display-statistics.png)

## Turn on statistics

Players only report statistics when **Report playback statistics** is on. Turn it on in
[Player settings](/reference/player-settings/#proof-of-play), either on a location (for every player there) or
on a single player. Players then report every two minutes.

## Filter statistics

| Filter | Use it to |
| --- | --- |
| Player name | Match a player. |
| Location | Match a location. |
| File name | Match a media file. |
| Date from / Date to | Limit to a date range. |
| Time from / Time to | Limit to a time of day, for example opening hours only. |

Click **Filter** to show results.

| Column | Meaning |
| --- | --- |
| Player name | The player that showed the file. |
| Location | Where that player is. |
| File name | The media file. |
| Count | How many times it played. |
| Total time | How long it was on screen in total. |

## Export

Choose which sheets (tabs) to include under **Tabs for export**, then click **Export to Excel**:

- **List**: every row, as shown on screen.
- **Total statistics**: totals per file.
- **Hourly statistics**: plays per hour.

:::tip
To see statistics for one player, open the player and use **Actions → Display statistics**. The filter is
filled in for you.
:::

## Permissions needed

**View display statistics**.
