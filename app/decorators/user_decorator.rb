# frozen_string_literal: true

module UserDecorator
  def display_name
    # if profile && profile.nickname
    #   profile.nickname
    # else
    #   self.email.split('@').first
    # end

    profile&.nickname || self.email.split('@').first
  end
end
