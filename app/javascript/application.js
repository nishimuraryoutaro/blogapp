// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "trix"
import "@rails/actiontext"
import $ from "jquery"
window.$ = $
window.jQuery = $

$(function() {
  $('.article_title').on('click', function() {
    window.alert('CLICKED')
  })
})