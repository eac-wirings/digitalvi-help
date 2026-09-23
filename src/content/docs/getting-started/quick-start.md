---
title: 'Quick start: your first screen'
description: A step-by-step walk-through from a new account to content playing on a screen in DigitalVI Studio.
sidebar:
  label: Quick start
---

This walk-through takes you from an empty account to content playing on a screen. It takes about 15 minutes.

:::note[Before you start]
Your account comes with a top-level **location**, a top-level **playlist group**, a **Fallback playlist** and a
**Simple layout** (one full-screen zone). You can build on those.
:::

## 1. Create a location

1. Go to **Players → [Locations](/players/locations/)**.
2. Click **Add new location**, pick a **Parent location**, enter a **Name** (for example *Main Street Store*)
   and set the **Time zone**.
3. Click **Save**.

## 2. Upload your media

1. Go to **Playlists → [Media manager](/playlists/media-manager/)**.
2. Open your client's folder, then drag files onto the window or use **Upload files** on the toolbar.

## 3. Create a playlist and add content

1. Go to **Playlists → [Playlists](/playlists/playlists/)** and click **Add new playlist**.
2. Enter a **Name**, choose the **Location**, leave **Type** as *Media* and set a **Default media time in seconds**
   (how long each image is shown).
3. Click **Save**. The playlist opens with an empty **Playlist manager**.
4. Drag files from the Media manager into the playlist, or upload directly into it.

## 4. Schedule the playlist

The simplest option is to make it the fallback playlist of your playlist group, so it plays whenever nothing
else is scheduled:

1. Go to **Playlists → [Playlist groups](/playlists/playlist-groups/)** and open your group.
2. Click **Actions → Fallback playlist**, choose your playlist and click **Save**.

For time-based schedules, see [Scheduling](/reference/scheduling/).

## 5. Add the player

1. Go to **Players → [Players](/players/players/)** and click **Add new player**.
2. Enter a **Name** and pick the **Type**:
   - **Native Android app** or **Native Windows app** for a media player or smart display running the DigitalVI app.
   - **Universal app (through web browser)** or **Browser** for any screen that can open a web page.
3. Pick the **Playlist group** and **Location**, then click **Save**.
4. Connect the device:
   - **Browser players**: open the **Browser link for player** shown under *Details* on the player page.
   - **App players**: enter the MAC address or provisioning code on the form, or pair the device from the app.

## 6. Check it's working

Open the player. The **Status** panel shows *Last contact* and *Currently scheduled playlist in the main
zone*, and the camera icon shows a live screenshot. See [Player details](/players/player-details/).
