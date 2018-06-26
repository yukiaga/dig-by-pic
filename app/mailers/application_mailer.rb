class ApplicationMailer < ActionMailer::Base
  default from: Rails.application.credentials.gmail_address
  layout 'mailer'
end
