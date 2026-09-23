---
title: Playlists
description: Create playlists and collections, add and arrange media with the playlist manager, preview playlists and choose how they loop.
---

**Where:** Playlists → Playlists (`/playlists/tree`)

A **playlist** is an ordered list of content that plays in a zone. Playlists can be organized into
**collections**, which work like folders.

![Playlists tree](/screenshots/playlists-tree.png)

## The playlists tree

- Click **Details** on a playlist to open it.
- **Search playlists** (next to the page title) finds a playlist by name.
- **Add new playlist** creates a playlist.
- **Add new collection** creates a folder to group playlists, for example *Seasonal* or *Store promotions*.

Every client starts with a **Fallback playlist**, which plays when nothing else is scheduled.

## Add a new playlist

Click **Add new playlist**, fill in the form and click **Save**.

![Add new playlist](/screenshots/playlists-add.png)

### Playlist fields

| Field | Required | Description |
| --- | --- | --- |
| Name | Yes | For example *Summer promotions*. |
| Client | | The organization. |
| Location | Yes | Who can use the playlist. It's available at this location and below. |
| Collection | | The folder it appears in. |
| Type | | **Media** (images, videos, documents, web pages), **Data feeds** (weather, RSS and so on; see [Data feeds](/content/data-feeds/)) or **Audio only** (background music; plays alongside the visual playlists). |
| Action | | What happens when the playlist reaches the end. See below. |
| Event ID | | A number used to start this playlist on demand as an [event playlist](/playlists/playlist-groups/#event-playlists). |
| Default media time in seconds | Yes | How long each image or page shows, unless an item sets its own time. Videos play to the end. |
| Tag for sync | | Links the playlist to a [synchronization](/playlists/synchronizations/) source. |
| Note | | Free-text notes. |

### Playlist actions

| Action | Behavior |
| --- | --- |
| Loop indefinitely | Starts again from the top, for as long as the playlist is scheduled. |
| Loop until the original scheduled playlist was supposed to change | For event playlists: loops, then hands back when the schedule would normally switch. |
| Play all files once | Plays through once, then returns to what was scheduled. |
| Play all files once and continue to the next numbered playlist | Plays through once, then starts the playlist with the next **Event ID**. Use this to chain playlists. |

## Playlist details page

**Where:** `/playlists/{id}`

![Playlist details](/screenshots/playlists-detail.png)

The top panels show the **Playlist details** (Name, Collection, Location, Type, Action, Event ID, Default media
time, **Total media runtime**, Tag for sync and Note) and where the playlist is used: **Assigned to players**,
**Assigned to layout zones**, **Assigned to groups** and **Synchronizations**.

**Actions menu:**

| Action | What it does |
| --- | --- |
| Edit playlist | Opens the playlist form. |
| Preview playlist | Plays the playlist in your browser. |
| Delete playlist | Deletes it after confirmation. |

## Add content to a playlist

The **Playlist manager** at the bottom of the page shows the playlist's content, in play order.

- **Drag and drop** files from your computer onto the playlist manager to upload and add them.
- Or click **Upload files** on the toolbar.
- To reuse files you've already uploaded, add them from the [Media manager](/playlists/media-manager/).
- **Drag items** to change the order.

### Playlist manager toolbar

| Button | What it does |
| --- | --- |
| Back / Forward / Go to parent folder | Navigate. |
| New file | Create a new item, such as a web page link (`.url`). |
| New image | Create a blank image. |
| Upload files | Upload from your computer. |
| Open / Download | Open or download the selected item. |
| Undo / Redo | Undo or redo your last change. |
| Duplicate | Copy the selected item. |
| Delete / Empty the folder | Remove the selected items, or all items. |
| Rename | Rename an item. |
| Edit file | Edit an item's properties, such as display time or tags. |
| Select all / Select none / Invert selection | Selection helpers. |
| Preview | Preview the selected item. |
| Get info | Show file size, dimensions and dates. |
| List view / Sort | Switch between icons and a list, and change the sort order. |
| Full Screen | Expand the playlist manager. |

The status bar at the bottom shows the **number of items** and their **total size**.

:::tip
Right-click an item for the same options in a context menu.
:::

## Permissions needed

- **View playlists** to see playlists.
- **Manage playlists** to create, edit and delete them.
- **Manage media** to upload files.
