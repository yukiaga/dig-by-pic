# README

## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association

- has_many :artworks
- has_many :collections


## collections table

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|email|string|null: false|
|user_id|integer|null: false, foreign_key: true|

### Association

- has_many :artwork_collections
- has_many :artworks, through: artwork_collections
- belongs_to :user


## artworks table

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|image|string|null: false|
|link|string||
|artist|string||

### Association

- has_many :artwork_collections
- has_many :collections, through: artwork_collections
- belongs_to :user


## artwork_collections table

|Column|Type|Options|
|------|----|-------|
|artwork_id|integer|foreign_key: true|
|collection_id|integer|foreign_key: true|

### Association

- belongs_to :artwork
- belongs_to :collection
