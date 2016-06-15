Index =

  i: ->

    Index.handlers()

  handlers: ->
    $('.email input').focus Index.email
    $('.burger').click Index.mobile


  mobile: ->

    _.swap '.menu', '.burger'
    console.log 'Index.mobile()'


  email: ->

    i = $('.email > input')

    i[0].setSelectionRange(0, i[0].value.length)


