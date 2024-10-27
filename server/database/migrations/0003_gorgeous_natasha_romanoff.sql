ALTER TABLE `countries` ADD `iso_alpha_2` text NOT NULL;--> statement-breakpoint
ALTER TABLE `countries` ADD `iso_alpha_3` text NOT NULL;--> statement-breakpoint
ALTER TABLE `countries` ADD `iso_numeric` integer NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `countries_iso_alpha_2_unique` ON `countries` (`iso_alpha_2`);--> statement-breakpoint
CREATE UNIQUE INDEX `countries_iso_alpha_3_unique` ON `countries` (`iso_alpha_3`);--> statement-breakpoint
CREATE UNIQUE INDEX `countries_iso_numeric_unique` ON `countries` (`iso_numeric`);