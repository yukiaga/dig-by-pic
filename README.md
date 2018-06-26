![dig-by-pic](https://i.gyazo.com/cfd325343989fefc0944bc8c45a3fd04.gif "image")

# README

## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|password|string|null: false|

### Association

- has_many :likes

## likes table

|Column|Type|Options|
|------|----|-------|
|artwork_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association

- belongs_to :user, :artwork


## artworks table

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|image|string|null: false|
|link|string||
|artist|string||

### Association

- has_many :likes
