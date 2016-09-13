Global =

  i: ->

    Global.handlers()

  handlers: ->
    $('.email input').focus Global.email
    $('.burger').click Global.mobile


  mobile: ->

    _.swap '.menu', '.burger'
    console.log 'Global.mobile()'


  email: ->

    i = $('.email > input')

    i[0].setSelectionRange(0, i[0].value.length)


