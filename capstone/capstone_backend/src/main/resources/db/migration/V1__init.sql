-- Core widget
CREATE TABLE widget (
                        widget_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY ,
                        name TEXT NOT NULL ,
                        description TEXT,
                        created_at TIMESTAMP DEFAULT NOW(),
                        updated_at TIMESTAMP DEFAULT NOW()
);

-- Widget variants (different colors, styles, etc)
CREATE TABLE variant (
                         variant_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY ,
                         widget_id BIGINT NOT NULL REFERENCES widget(widget_id) ON DELETE CASCADE ,
                         color TEXT,
                         size TEXT,
                         style TEXT
);

-- Inventory
CREATE TABlE inventory (
                           inventory_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY ,
                           variant_id BIGINT UNIQUE NOT NULL REFERENCES variant(variant_id) ON DELETE CASCADE,
                           quantity INT NOT NULL,
                           status TEXT DEFAULT 'active'
);

-- Media (images, etc)
CREATE TABLE media (
                       media_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY ,
                       widget_id INT NOT NULL REFERENCES widget(widget_id) ON DELETE CASCADE ,
                       url TEXT NOT NULL,
                       is_primary BOOLEAN DEFAULT FALSE
);

-- Ratings (user-submitted feedback)
CREATE TABLE rating (
                        rating_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY ,
                        widget_id BIGINT NOT NULL REFERENCES widget(widget_id) ON DELETE CASCADE ,
                        score INT CHECK (score >= 1 AND score <= 5),
                        comment TEXT,
                        created_at TIMESTAMP DEFAULT NOW()
);