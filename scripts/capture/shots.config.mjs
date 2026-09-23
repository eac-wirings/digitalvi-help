// Screens to capture for the help site.
// Each entry: file name (under public/screenshots/) -> app path, plus an optional
// `prepare(page)` hook for dialogs that only appear after a click.
//
// IDs below belong to the "Help" demo tenant on dev.digitalvi.app.
// If you capture against a different tenant, update the IDs in TENANT.

export const BASE_URL = process.env.DVI_BASE_URL ?? 'https://dev.digitalvi.app';

export const TENANT = {
  userId: '51f595b5-bde7-43db-9e31-65f2dc4a63bf',
  locationId: 307,
  playerId: 327,
  layoutId: 299,
  zoneId: 523,
  playlistId: 661,
  playlistGroupId: 212,
  appVersionId: 90,
  hardwareDriverId: 1,
};

const t = TENANT;

export const SHOTS = [
  // Home
  { file: 'dashboard', path: '/' },
  { file: 'messages', path: '/notifications' },
  { file: 'tutorials', path: '/tutorialScenarios' },

  // Clients
  { file: 'users-list', path: '/users' },
  { file: 'users-add', path: '/users/edit' },
  { file: 'users-detail', path: `/users/${t.userId}` },
  { file: 'users-reset-password', path: `/users/${t.userId}/resetPassword` },
  { file: 'users-api-key', path: `/users/${t.userId}/apikey/create` },
  { file: 'permissions-list', path: '/permissions' },
  { file: 'permissions-add', path: '/permissions/create' },
  { file: 'permissions-edit', path: `/permissions/edit?userId=${t.userId}&clientId=108&locationId=${t.locationId}` },
  { file: 'roles-list', path: '/roles' },
  { file: 'roles-add', path: '/roles/edit' },

  // Players
  { file: 'locations-tree', path: '/locations' },
  { file: 'locations-detail', path: `/locations/${t.locationId}/info` },
  { file: 'locations-add', path: '/locations/edit' },
  { file: 'locations-edit', path: `/locations/edit/${t.locationId}` },
  { file: 'locations-dashboard', path: `/locations/${t.locationId}` },
  { file: 'locations-dashboard-edit', path: `/locations/${t.locationId}/dashboard/edit` },
  { file: 'locations-opening-hours', path: `/locations/${t.locationId}/openingHours` },
  { file: 'locations-opening-hours-edit', path: `/locations/${t.locationId}/openingHours/edit` },
  { file: 'locations-player-settings', path: `/locations/${t.locationId}/playerSettings` },

  { file: 'players-list', path: '/players' },
  { file: 'players-add', path: '/players/edit' },
  { file: 'players-detail', path: `/players/${t.playerId}` },
  { file: 'players-edit', path: `/players/edit/${t.playerId}` },
  { file: 'players-playlist-schedules', path: `/players/${t.playerId}/playlistSchedules` },
  { file: 'players-layout-schedules', path: `/players/${t.playerId}/layoutSchedules` },
  { file: 'players-displays', path: `/players/${t.playerId}/displays` },
  { file: 'players-change-client', path: `/players/${t.playerId}/changeClient` },
  { file: 'players-settings', path: `/players/${t.playerId}/settings` },
  { file: 'players-status-history', path: `/players/${t.playerId}/statusHistory` },

  { file: 'layouts-list', path: '/screenLayouts' },
  { file: 'layouts-add', path: '/screenLayouts/edit' },
  { file: 'layouts-detail', path: `/screenLayouts/${t.layoutId}` },
  { file: 'layouts-builder', path: `/screenLayouts/${t.layoutId}/builder` },
  {
    file: 'layouts-zone-dialog',
    path: `/screenLayouts/${t.layoutId}/builder`,
    prepare: async (page) => {
      await page.getByText('Main zone', { exact: true }).first().dblclick();
      await page.waitForTimeout(800);
    },
  },
  { file: 'layouts-zone-schedules', path: `/screenLayouts/${t.layoutId}/schedules/${t.zoneId}` },

  { file: 'tags-list', path: '/tags' },
  { file: 'tags-bulk', path: '/tags/bulk' },
  { file: 'app-versions-list', path: '/appVersion' },
  { file: 'app-versions-detail', path: `/appVersion/${t.appVersionId}` },
  { file: 'display-statistics', path: '/playStatistics' },
  { file: 'licenses', path: '/licenses' },

  // Content
  { file: 'content-creation', path: '/contentCreation', wait: 4000 },
  { file: 'data-feeds-list', path: '/extraContent' },
  { file: 'data-feeds-add', path: '/extraContent/create' },
  { file: 'data-feeds-weather', path: '/extraContent/edit?definitionId=-1' },
  { file: 'data-feeds-rss', path: '/extraContent/edit?definitionId=-2' },
  { file: 'data-feeds-datetime', path: '/extraContent/edit?definitionId=-3' },

  // Playlists
  { file: 'playlist-groups-tree', path: '/playerGroups' },
  { file: 'playlist-groups-detail', path: `/playerGroups/${t.playlistGroupId}` },
  { file: 'playlist-groups-add', path: '/playerGroups/edit' },
  { file: 'playlist-groups-fallback-layout', path: `/playerGroups/${t.playlistGroupId}/fallbackLayout` },
  { file: 'playlist-groups-bulk-assign', path: `/playerGroups/${t.playlistGroupId}/bulkAssign` },
  { file: 'playlist-groups-event-playlist', path: `/playerGroups/${t.playlistGroupId}/addNotScheduledPlaylist` },
  { file: 'playlists-tree', path: '/playlists/tree' },
  { file: 'playlists-detail', path: `/playlists/${t.playlistId}`, wait: 2000 },
  { file: 'playlists-add', path: '/playlists/edit' },
  { file: 'media-manager', path: '/files', wait: 2000 },
  { file: 'synchronizations', path: '/synchronizations' },

  // Control
  { file: 'devices-list', path: '/devices' },
  { file: 'devices-add', path: '/devices/edit' },
  { file: 'hardware-drivers-list', path: '/hardwareDrivers' },
  { file: 'hardware-drivers-detail', path: `/hardwareDrivers/${t.hardwareDriverId}` },

  // About
  { file: 'support', path: '/support' },
  { file: 'about', path: '/about' },
];
