ALTER TABLE variant
RENAME COLUMN variant_id TO id;

ALTER TABLE inventory
RENAME COLUMN inventory_id to id;

ALTER TABLE media
RENAME COLUMN media_id to id;

ALTER TABLE rating
RENAME COLUMN rating_id to id;