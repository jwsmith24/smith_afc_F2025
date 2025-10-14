ALTER TABLE variant
    ADD COLUMN created_at TIMESTAMP DEFAULT now(),
    ADD COLUMN updated_at TIMESTAMP DEFAULT now();

ALTER TABLE rating
    ADD COLUMN updated_at TIMESTAMP DEFAULT now();

ALTER TABLE media
    ADD COLUMN created_at TIMESTAMP DEFAULT now(),
    ADD COLUMN updated_at TIMESTAMP DEFAULT now();

