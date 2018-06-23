class Inquiry
  include ActiveModel::Model

  attr_accessor :name, :email, :message

  validates :name, presence: {:message => '名前を入力してください'}
  validates :email, length: { minimum: 3, :too_short => 'メールアドレスを入力して下さい。'}
  validates :message, presence: { :message => '問い合わせ内容を入力して下さい。'}
end
