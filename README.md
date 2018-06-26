[![https://gyazo.com/5513d421f8a11408225cf8315f79956f](https://i.gyazo.com/5513d421f8a11408225cf8315f79956f.gif)](https://gyazo.com/5513d421f8a11408225cf8315f79956f)

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
