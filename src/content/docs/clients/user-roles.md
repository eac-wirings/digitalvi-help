---
title: User roles
description: Create reusable roles, named sets of permissions, to assign to users in Studio.
---

**Where:** Clients → User roles (`/roles`)

A **role** is a named set of permissions that you can reuse when you [grant a user access](/clients/user-permissions/).
Changing a role changes what every user with that role can do.

![User roles list](/screenshots/roles-list.png)

## Find a role

| Filter | Use it to |
| --- | --- |
| Name | Match the role name. |
| Description | Match the description. |
| Contains permission | Show only roles that include a particular permission, for example *Players - Reboot players*. |

## Add a new user role

Click **Add new user role**, fill in the form and click **Save**.

![Add new user role](/screenshots/roles-add.png)

| Field | Required | Description |
| --- | --- | --- |
| Name | Yes | For example *Store manager*. |
| Client | | The client this role belongs to. |
| Description | | A note on who the role is for. |
| Permissions | | Tick each permission the role includes. They're grouped by area: Clients, Customer notifications, Dashboards, Devices, Layouts, Licenses, Locations, Messages, Players, Playlist groups, Playlists and Tags. |

See the [Permissions reference](/reference/permissions/) for what each checkbox allows.

:::note
The built-in roles (*Organization admin*, *Standard user* and so on) are managed by DigitalVI and can't be
opened or edited. Opening one shows *Forbidden access*. Create your own role if you need a variation.
:::

## Permissions needed

**Manage roles**.
