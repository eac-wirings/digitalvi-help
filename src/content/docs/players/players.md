---
title: Players
description: Find, filter and add players (screens or media devices) in DigitalVI Studio, and choose the right player type.
---

**Where:** Players → Players (`/players`)

A **player** is one screen or media device running DigitalVI. This page lists all your players and lets you
filter them by status.

![Players list](/screenshots/players-list.png)

## Find players

| Filter | Use it to |
| --- | --- |
| Name | Match the player name. |
| Playlist group | Match the [playlist group](/playlists/playlist-groups/) name. |
| Location | Match the [location](/players/locations/) name. |
| MAC address | Find a device by its network MAC address. |
| Player type | *Android app*, *Windows app*, *Universal app* or *Browser*. |
| Also deactivated | Include deactivated players. |
| Online in last X min | Players that contacted Studio in the last X minutes. |
| Offline in last X min | Players that have **not** contacted Studio in the last X minutes. |
| Synced in last X min | Players that finished a content sync in the last X minutes. |
| Not synced in last X min | Players that have **not** synced in the last X minutes. |
| Warning state | *With warning* or *Without warning*. |
| Uptime: % – % | Players whose uptime percentage is in this range. |

The list shows **Name**, **Playlist group**, **Location**, **Hardware model**, **Software version** and
**Last contact**. Click a player to open its [details page](/players/player-details/).

:::tip
The status tiles on the [Dashboard](/home/dashboard/) open this list with the matching filter already applied.
:::

## Add a new player

Click **Add new player**, fill in the form and click **Save**. The player's details page opens.

![Add new player](/screenshots/players-add.png)

| Field | Required | Description |
| --- | --- | --- |
| Name | Yes | A name you'll recognize, for example *Lobby – left screen*. |
| Client | | The organization the player belongs to. |
| Type | | How the player runs. See [Player types](#player-types). |
| Playlist group | Yes | Decides what content the player gets. |
| Location | Yes | Decides the time zone and inherited settings. |
| MAC address | | *App players only.* The device's MAC address, used to match the device to this record. |
| Provisioning code | | *App players only.* A code entered on the device to pair it with this player. |
| Max concurrent sessions | Yes | How many screens may use this player's connection at the same time. Usually **1**. |
| Include tags | | Only play media with these [tags](/players/tags/). |
| Exclude tags | | Skip media with these tags. |
| Ignore untagged media | | Skip media that has no tags at all. |
| Automatic app update | | *App players only.* When the player installs new app versions: **Default** (inherit), **No automatic update**, **Immediately**, or a 30-minute window such as *02:00 – 02:30 AM*. |
| App release channel | | *App players only.* **Production** (recommended), **Beta** or **Alpha**. See [App versions](/players/app-versions/). |
| Note | | Free-text notes. |

:::note
Fields marked *App players only* are hidden when the type is **Universal app** or **Browser**.
:::

### Player types

| Type | Use it for |
| --- | --- |
| Native Android app | Android media players, Android smart displays and TV boxes running the DigitalVI app. Supports the full [player settings](/reference/player-settings/). |
| Native Windows app | Windows PCs running the DigitalVI app. |
| Universal app (through web browser) | Any device that can run the DigitalVI web app in a browser. |
| Browser | Any screen that can open a web page. Studio gives you a **Browser link for player** to open on the device. |

### Connect a Browser player

After saving, open the player. Under **Details** you'll find **Browser link for player**
(for example `https://dev.digitalvi.app/play/…`). Open that link full-screen on the display.

**Concurrent sessions** shows how many browsers are using the link right now, out of the maximum you set.

## Permissions needed

- **View players** to see the list.
- **Add new players** to create players.
- **Manage players** to edit them.
- **(De)activate players** to deactivate them.
