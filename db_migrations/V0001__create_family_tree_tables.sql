-- Таблица пользователей
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица семейных древ
CREATE TABLE IF NOT EXISTS family_trees (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(255) NOT NULL DEFAULT 'Моё семейное древо',
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица персон в древе
CREATE TABLE IF NOT EXISTS persons (
    id SERIAL PRIMARY KEY,
    tree_id INTEGER REFERENCES family_trees(id),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    middle_name VARCHAR(100),
    maiden_name VARCHAR(100),
    gender VARCHAR(10) CHECK (gender IN ('male', 'female')),
    birth_date VARCHAR(50),
    birth_place VARCHAR(255),
    death_date VARCHAR(50),
    death_place VARCHAR(255),
    is_alive BOOLEAN DEFAULT true,
    occupation VARCHAR(255),
    bio TEXT,
    history_context TEXT,
    position_x DECIMAL(10, 2) DEFAULT 0,
    position_y DECIMAL(10, 2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица связей между персонами
CREATE TABLE IF NOT EXISTS relationships (
    id SERIAL PRIMARY KEY,
    tree_id INTEGER REFERENCES family_trees(id),
    source_person_id INTEGER REFERENCES persons(id),
    target_person_id INTEGER REFERENCES persons(id),
    relationship_type VARCHAR(20) CHECK (relationship_type IN ('parent', 'spouse', 'child', 'sibling')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(source_person_id, target_person_id, relationship_type)
);

-- Индексы для ускорения запросов
CREATE INDEX IF NOT EXISTS idx_family_trees_user_id ON family_trees(user_id);
CREATE INDEX IF NOT EXISTS idx_persons_tree_id ON persons(tree_id);
CREATE INDEX IF NOT EXISTS idx_relationships_tree_id ON relationships(tree_id);
CREATE INDEX IF NOT EXISTS idx_relationships_source ON relationships(source_person_id);
CREATE INDEX IF NOT EXISTS idx_relationships_target ON relationships(target_person_id);