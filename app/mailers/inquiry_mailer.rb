class InquiryMailer < ApplicationMailer
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.registration_confirmation.subject
  #
  def received_email(inquiry)
    @inquiry = inquiry

    mail to: Rails.application.credentials.gmail_address

    mail subject: 'お問い合わせ'

  end

end
