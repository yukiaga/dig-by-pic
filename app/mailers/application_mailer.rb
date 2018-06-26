class ApplicationMailer < ActionMailer::Base
  default from: 'smtp.gmail.com'
  layout 'mailer'
end
