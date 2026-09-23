---
title: Hardware drivers
description: View the hardware drivers Studio uses to talk to screens and connected hardware, and see which players and devices use them.
---

**Where:** Control → Hardware drivers (`/hardwareDrivers`)

A **hardware driver** tells a player or [device](/control/devices/) how to communicate with a specific piece of
hardware, for example to turn a screen on and off, switch inputs or read its temperature. Drivers are provided
by DigitalVI.

![Hardware drivers list](/screenshots/hardware-drivers-list.png)

## Find a driver

Filter by **Name** or **Definition**. The list shows **Name** and **Type**. Click **Details** to open a driver.

## Driver details

**Where:** `/hardwareDrivers/{id}`

![Hardware driver details](/screenshots/hardware-drivers-detail.png)

| Panel | What it shows |
| --- | --- |
| Driver details | **Name**, **Type** (for example *Basic*) and **Attachments** (manuals or configuration files). |
| Hardware control preview | What the driver's controls look like on a dashboard. The buttons in the preview don't do anything. |
| Assigned to players | Players using this driver. |
| Assigned to devices | Devices using this driver. |

## Permissions needed

**View hardware drivers**.
