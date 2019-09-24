
/** Alert、Confirm */
// 1. modal框模板, 改变背景色
// 2. 区分alert 和 confirm
// 3. 给每个弹出框赋值/关闭
// 4. 点确定或者取消时的回调
// 5. alert是一种特殊的confirm

/** Toast */
// 1. opacity来控制显隐
// 2. 多个toast怎么重叠显示
// 3. 方法需要考虑加 定时关闭的参数

// 不需要另外加CSS，一个JS文件，完全依托于bootstrap和jquery

(function ($) {
  // 根据不同的提示类型获取图标
  function getIcon (type) {
    var i = document.createElement('i')
    if (type === 'primary') {
      i.innerHTML = '<svg style="width: 1em; height: 1em; vertical-align: middle; fill: currentcolor; overflow: hidden; font-size: 26px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="26">' +
                        '<path d="M512 958.016611c-245.919634 0-446.016611-200.064292-446.016611-446.016611 0-245.919634 200.095256-446.016611 446.016611-446.016611 245.952318 0 446.016611 200.064292 446.016611 446.016611S757.952318 958.016611 512 958.016611zM512 129.983389c-210.655557 0-382.016611 171.359333-382.016611 382.016611 0 210.624593 171.359333 382.016611 382.016611 382.016611 210.624593 0 382.016611-171.359333 382.016611-382.016611S722.624593 129.983389 512 129.983389z" fill="#007acc"></path> ' +
                        '<path d="M463.99957 304.00043c0 26.509985 21.490445 48.00043 48.00043 48.00043s48.00043-21.490445 48.00043-48.00043-21.490445-48.00043-48.00043-48.00043S463.99957 277.490445 463.99957 304.00043z" fill="#007acc"></path> ' +
                        '<path d="M512 768c-17.664722 0-32.00086-14.303454-32.00086-32.00086L479.99914 448c0-17.664722 14.336138-32.00086 32.00086-32.00086s32.00086 14.336138 32.00086 32.00086l0 287.99914C544.00086 753.696546 529.664722 768 512 768z" fill="#007acc"></path> ' +
                      '</svg>'
    }
    if (type === 'success') {
      i.innerHTML = '<svg style="width: 1em; height: 1em; vertical-align: middle; fill: currentcolor; overflow: hidden; font-size: 26px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="26">' +
                      '<path d="M512 65.983389c-245.919634 0-446.016611 200.095256-446.016611 446.016611 0 245.952318 200.064292 446.016611 446.016611 446.016611S958.016611 757.952318 958.016611 512C958.016611 266.080366 757.952318 65.983389 512 65.983389zM727.231286 438.432254 471.00766 697.439161c-0.063647 0.063647-0.192662 0.096331-0.25631 0.192662-0.096331 0.063647-0.096331 0.192662-0.192662 0.25631-2.048757 1.983389-4.575729 3.19957-6.944443 4.544765-1.183497 0.672598-2.143368 1.696116-3.392232 2.176052-3.839484 1.536138-7.904314 2.33603-11.967424 2.33603-4.095794 0-8.224271-0.799892-12.096439-2.399677-1.279828-0.543583-2.303346-1.632469-3.519527-2.303346-2.368714-1.343475-4.832039-2.528692-6.880796-4.544765-0.063647-0.063647-0.096331-0.192662-0.159978-0.25631-0.063647-0.096331-0.192662-0.096331-0.25631-0.192662l-126.016611-129.503454c-12.320065-12.672705-12.032791-32.928047 0.639914-45.248112 12.672705-12.287381 32.895364-12.063755 45.248112 0.639914l103.26354 106.112189 233.279613-235.839269c12.416396-12.576374 32.704421-12.703669 45.248112-0.25631C739.520387 405.600538 739.647682 425.85588 727.231286 438.432254z" fill="#0e932e" data-spm-anchor-id="a313x.7781069.0.i4"></path> ' +
                    '</svg>'
    }

    if (type === 'danger') {
      i.innerHTML = '<svg style="width: 1em; height: 1em; vertical-align: middle; fill: currentcolor; overflow: hidden; font-size: 26px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="26" data-spm-anchor-id="a313x.7781069.0.i2"> ' +
                      '<path d="M1019.114674 905.142857l-475.428571-822.857143c-7.085714-12.228571-19.314286-18.285714-31.657143-18.285714s-24.685714 6.057143-31.657143 18.285714l-475.428571 822.857143C-9.113897 929.6 8.486103 960 36.600389 960h950.857142c28.114286 0 45.714286-30.4 31.657143-54.857143zM475.457531 402.285714c0-5.028571 4.114286-9.142857 9.142858-9.142857h54.857142c5.028571 0 9.142857 4.114286 9.142858 9.142857v210.285715c0 5.028571-4.114286 9.142857-9.142858 9.142857h-54.857142c-5.028571 0-9.142857-4.114286-9.142858-9.142857V402.285714z m36.571429 402.285715a54.868571 54.868571 0 0 1 0-109.714286 54.868571 54.868571 0 0 1 0 109.714286z" fill="#f42f16"></path> ' +
                    '</svg>'
    }
    return i
  }
  /**
   * 插入元素
   */
  function insertStyle () {
    var style = document.createElement('style')
    var styleContent = '.bs-message-dialog, .bs-loading-dialog { background-color: rgba(0, 0, 0, .1); }' +
                      '.bs-message-dialog .modal-content{border: none;}' +
                      '.bs-message-dialog .modal-content .modal-header,' +
                      '.bs-message-dialog .modal-content .modal-content,' +
                      '.bs-message-dialog .modal-content .modal-footer { padding: .8rem; border: none; }'
    style.innerHTML = styleContent
    document.head.appendChild(style)
  }

  /**
   * 生成模态框模板
   * @param {*} options 设置属性
   * @param {string} type 模态框类型 confirm(默认)\alert
   * @returns {Element} 模态框对象
   */
  function modalTemp (options, type) {
    var modalWrapper = document.createElement('div')
    modalWrapper.classList.add('modal', 'bs-message-dialog')
    modalWrapper.style.display = 'block'
    modalWrapper.innerHTML = '<div class="modal-dialog" role="document">' +
      '<div class="modal-content shadow">' +
        '<div class="modal-header">' +
          '<h5 class="modal-title">' + options.title + '</h5>' +
          '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
          '</button>' +
        '</div>' +
        '<div class="modal-body py-0">' +
          '<p class="mb-0">' + options.message + '</p>' +
        '</div>' +
        '<div class="modal-footer">' +
          (type === 'alert' ? '' : ('<button type="button" class="btn btn-light" data-dismiss="modal">' + options.cancelButtonText + '</button>')) +
          '<button type="button" class="btn btn-primary" data-submit="true">' + options.submitButtonText + '</button>' +
        '</div>' +
      '</div>' +
    '</div>'

    return modalWrapper
  };

  // 生成Toast信息模板
  function toastTemp (options) {
    var alertWrapper = document.createElement('div')
    alertWrapper.classList.add('alert', 'alert-' + options.type, 'd-flex')
    alertWrapper.style.width = '400px'
    var leftSide = document.createElement('div')
    leftSide.classList.add('flex-grow-0', 'px-2')
    var rightSide = document.createElement('div')
    rightSide.classList.add('flex-grow-1')
    alertWrapper.appendChild(leftSide)
    alertWrapper.appendChild(rightSide)
    leftSide.appendChild(getIcon(options.type))
    rightSide.style.alignSelf = 'center'
    rightSide.innerHTML = options.message
    return alertWrapper
  }

  // 生成loading模板
  function loadingTemp () {
    var modalWrapper = document.querySelector('.bs-loading-dialog')
    if (!modalWrapper) {
      modalWrapper = document.createElement('div')
      modalWrapper.classList.add('modal', 'bs-loading-dialog')
      modalWrapper.innerHTML = '<div class="spinner-border text-primary position-absolute" role="status" style="width: 3rem; height: 3em; top: 50%; left: 50%; margin-left: -1.5rem; margin-top: -1.5rem;">' +
                                  '<span class="sr-only">Loading...</span>' +
                                '</div>'
    }
    return modalWrapper
  }

  /**
   * 弹出框绑定事件
   * @param {*} el 元素
   * @param {*} onSubmit 确认的回调事件
   * @param {*} onCancle 取消的回调事件
   */
  function bindEvent (el, onSubmit, onCancel) {
    // 确定按钮
    $(el).find('[data-submit]').on('click', function () {
      onSubmit()
      document.body.removeChild(el)
    })
    // 关闭弹窗
    $(el).find('[data-dismiss]').on('click', function () {
      onCancel()
      document.body.removeChild(el)
    })
  }
  insertStyle()

  // 弹出模态框
  function showModal (options, type) {
    var setting = {
      title: '提示',
      message: '',
      submitButtonText: '确定',
      cancelButtonText: '取消',
      onSubmit: function () {},
      onCancle: function () {}
    }
    if (typeof options === 'string') {
      setting.message = options
    } else {
      $.extend(setting, options)
    }

    var temp = modalTemp(setting, type)
    bindEvent(temp, setting.onSubmit, setting.onCancle)
    document.body.appendChild(temp)
  }

  // 弹出信息提示框
  function showToast (options) {
    var bsDialog = document.querySelector('.bs-toast-dialog')
    if (!bsDialog) {
      var dialog = document.createElement('div')
      dialog.classList.add('bs-toast-dialog')
      dialog.style = 'position: fixed; top: 100px; left: 50%; transform: translateX(-50%); z-index: 2000;'
      document.body.appendChild(dialog)
    }
    bsDialog = document.querySelector('.bs-toast-dialog')
    var toastBox = toastTemp(options)
    bsDialog.appendChild(toastBox)
    setTimeout(function () {
      $(toastBox).animate({ top: '-1000px', opacity: '0' }, 'slow', function () { bsDialog.removeChild(toastBox) })
    }, options.duration)
  }

  function showLoading (options) {
    var temp = loadingTemp(options)
    document.body.append(temp)
    $(temp).show()
  }

  $.extend({
    alert: function (options) {
      showModal(options, 'alert')
    },
    confirm: function (options) {
      showModal(options, 'confirm')
    },
    toast: function (options) {
      if (!options) {
        return
      }
      var setting = {
        type: options.type || 'primary',
        message: typeof options === 'string' ? options : (options.message || ''),
        duration: 2000
      }
      showToast(setting)
    },
    loading: {
      show () {
        showLoading()
      },
      hide () {
        $('.bs-loading-dialog').hide()
      }
    }
  })
})(jQuery)
