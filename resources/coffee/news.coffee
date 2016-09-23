News =

  i: ->
    @handlers()

    hash = location.hash.replace '#', ''
    if hash is 'press' then News.press() else News.blog()

  handlers: ->
    $('.newsummary > .smenu > .option').click @menuHandler

  menuHandler: ->

    option = $(this).data 'type'
    _.off '.newsummary > .smenu > .option'

    if option is 'blog' then News.blog() else News.press()

    return false

  blog: ->
    _.on '.articles'
    _.off '.presses'
    _.on '.smenu > .option_blog'
  press: ->
    _.on '.presses'
    _.off '.articles'
    _.on '.smenu > .option_press'



