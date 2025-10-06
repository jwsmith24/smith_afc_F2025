CREATE UNIQUE INDEX uq_media_primary_per_widget
ON media(widget_id)
WHERE is_primary = true;