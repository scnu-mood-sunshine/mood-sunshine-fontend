import React from 'react'
import BraftEditor from 'braft-editor'
import NavigationBar from './navigation-bar'
import 'braft-editor/dist/braft.css'
require('../styles/editor.css')

class Editor extends React.Component {

  state = {
    htmlContent: ''
  }

  handleChange = (content) => {
    console.log(content)
  }

  handleRawChange = (rawContent) => {
    console.log(rawContent)
  }


  render() {

    const editorProps = {
      height: 500,
      placeholder: 'Hello World!',
      initialContent: '',
      onHTMLChange: this.handleHTMLChange,
      onChange: this.handleChange,
      onRawChange: this.handleRawChange,
      viewWrapper: '.demo',
      // 增加自定义预览按钮
      extendControls: [
        {
          type: 'split'
        },
        {
          type: 'button',
          text: '预览',
          className: 'preview-button',
          onClick: () => {
            window.open().document.write(this.state.htmlContent)
          }
        }, {
          type: 'dropdown',
          text: <span>下拉菜单</span>,
          component: <h1 style={{width: 200, color: '#ffffff', padding: 10, margin: 0}}>Hello World!</h1>
        }, {
          type: 'modal',
          text: <span style={{paddingRight: 10,paddingLeft: 10}}>弹出菜单</span>,
          className: 'modal-button',
          modal: {
            title: '这是一个弹出框',
            showClose: true,
            showCancel: true,
            showConfirm: true,
            confirmable: true,
            onConfirm: () => console.log(1),
            onCancel: () => console.log(2),
            onClose: () => console.log(3),
            children: (
              <div style={{width: 480, height: 320, padding: 30}}>
                <span>Hello World！</span>
              </div>
            )
          }
        }
      ]
    }

    return (
      <div>
        <NavigationBar />
        <div className="editor-container">
          <input type="text" placeholder="文章标题..." className="title-input"/>
          <div className="editor-wrap" id="editor-root">
            <div className="demo" width="888px">
              <BraftEditor {...editorProps} />
            </div>
          </div>
        </div>
      </div>
    )

  }

  handleHTMLChange = (htmlContent) => {
    this.setState({ htmlContent })
    console.log(this.state.htmlContent)
  }

}

export default Editor
