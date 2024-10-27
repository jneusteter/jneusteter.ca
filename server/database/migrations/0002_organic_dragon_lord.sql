CREATE TABLE `cities` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`state_id` integer,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (`state_id`) REFERENCES `states`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `countries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP'
);
--> statement-breakpoint
CREATE UNIQUE INDEX `countries_name_unique` ON `countries` (`name`);--> statement-breakpoint
CREATE TABLE `states` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`country_id` integer,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (`country_id`) REFERENCES `countries`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
ALTER TABLE `batteries` ADD `city_id` integer REFERENCES cities(id);--> statement-breakpoint
ALTER TABLE `batteries` ADD `created_at` text DEFAULT 'CURRENT_TIMESTAMP';