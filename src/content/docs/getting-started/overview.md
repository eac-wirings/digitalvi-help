---
title: How Studio fits together
description: The building blocks of DigitalVI Studio (clients, locations, players, playlist groups, playlists, layouts and schedules) and how they relate.
sidebar:
  label: How Studio fits together
---

DigitalVI Studio is a web-based platform for managing digital signage. You use it to register screens
(**players**), decide what content they show (**playlists**), how the screen is divided (**layouts**) and
**when** each piece of content plays (**schedules**).

## The building blocks

| Concept | What it is | Where to manage it |
| --- | --- | --- |
| Client | Your organization's account. Everything you create belongs to a client. Most users only ever see one client. | Set on every form as **Client** |
| Location | A place where screens live: a site, a building, a floor, a room. Locations form a tree, so a child location sits inside its parent. | [Locations](/players/locations/) |
| Player | One screen or media device running the DigitalVI app (Android, Windows, universal web app or a plain browser). | [Players](/players/players/) |
| Playlist group | A group of players that share the same playlists and layouts. Groups also form a tree, and players inherit from their group. | [Playlist groups](/playlists/playlist-groups/) |
| Playlist | An ordered list of media files (images, videos, web pages, documents) or data feeds. | [Playlists](/playlists/playlists/) |
| Media | The files you upload: images, videos, PDFs and so on. | [Media manager](/playlists/media-manager/) |
| Data feed | Live content that isn't a file: weather, RSS news, date/time, YouTube, streams, camera input. | [Data feeds](/content/data-feeds/) |
| Layout | How a screen is split into **zones**. Each zone plays its own playlist. | [Layouts](/players/layouts/), [Layout builder](/players/layout-builder/) |
| Schedule | Rules for which playlist or layout is active at what time, on which days and between which dates. | [Scheduling](/reference/scheduling/) |
| Tag | A label used to match media to players, so one playlist can show different files on different screens. | [Tags](/players/tags/) |

## How content reaches a screen

```text
Media files / data feeds
        │  added to
        ▼
    Playlist ──────── scheduled into ───────┐
                                            ▼
    Layout (zones) ── assigned to ──► Playlist group ──► Player(s)
                                            ▲
                     Location (time zone, player settings, opening hours)
```

1. Upload files in the [Media manager](/playlists/media-manager/) or create a [data feed](/content/data-feeds/).
2. Add them to a [playlist](/playlists/playlists/).
3. Schedule the playlist into a zone of a [layout](/players/layouts/). You can do this on the playlist group, on the
   layout zone, or directly on a single player.
4. Players in that [playlist group](/playlists/playlist-groups/) download the content and play it.

If nothing is scheduled for a zone at a given moment, the player shows the group's **fallback playlist** and
**fallback layout**.

## Inheritance

Studio is built around trees, so you can set things once near the top and let everything below inherit them:

- **Locations → players.** Time zone, [player settings](/reference/player-settings/) and include/exclude tags
  are inherited from parent locations. A child location's time zone defaults to *From parent location*.
- **Playlist groups → players.** Players get their fallback playlist, fallback layout and schedules from their
  group and its parent groups.
- **Player level overrides.** Anything set directly on a player (its own schedules or settings) takes
  priority over what it inherits.
