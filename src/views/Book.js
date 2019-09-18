import React, { Component } from 'react'
import { Table, Input, Button, Icon, Popconfirm, Tag } from 'antd';
import Highlighter from 'react-highlight-words';
import api from '../api/api_qin';
class Book extends Component {
    constructor (props) {
        super(props)
        this.state={
            currentIndex:1,
            authorlist:[],
            columns :[
                {
                    title: '#',
                    key:'id',
                    render:(text,record,index)=>{
                      //生成序号
                          // console.log(text,record,index);
                          return(
                            <span>{(this.state.currentIndex-1)*10+(index+1)}</span>
                          )
                        }, 
                        // width: 50,
                },
                {
                  title: '封面',
                  dataIndex: 'cover',
                  key: 'cover',
                  render: (cover) => <img style={{ width: "50px", borderRadius: '10px',height:'70px' }} src={cover} />,
                  
                },
                {
                  title: '书名',
                  dataIndex: 'name',
                  ...this.getColumnSearchProps('name'),
                },
                {
                  title: '作者',
                  dataIndex: 'author',
                  ...this.getColumnSearchProps('author'),
                },
                {
                  title: '字数',
                  dataIndex: 'word',
                  // defaultSortOrder: 'descend',
                  sorter: (a, b) => a.word - b.word,
                },
                {
                  title: '进度',
                  dataIndex: 'gress',
                  render:gress=>gress?'已完结':'连载中',
                  filters: [
                    {
                      text: '已完结',
                      value: true,
                    },
                    {
                      text: '连载中',
                      value: false,
                    },
                  ],
                  // filterMultiple: false,
                  onFilter: (value, record) =>record.gress==value
                },
                {
                  title: '操作',
                  key: 'key',
                  dataIndex: 'id',
                  render: (id,key,index) => (
                      <span>
                          <Popconfirm
                              title="提示:确认删除这本书吗?"
                              icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                              onConfirm={this.Confirm.bind(this,id,key.key,index)}
                              okText="确认"
                              cancelText="取消"
                              >
                              <Tag color="red" style={{cursor:"pointer"}} >删除</Tag>
                          </Popconfirm>
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 1,
      authorlist: [],
      columns: [
        {
          title: '#',
          key: 'id',
          render: (text, record, index) => {
            //生成序号
            // console.log(text,record,index);
            return (
              <span>{(this.state.currentIndex - 1) * 10 + (index + 1)}</span>
            )
          },
          // width: 50,
        },
        {
          title: '封面',
          dataIndex: 'cover',
          key: 'cover',
          render: (cover) => <img style={{ width: "50px", borderRadius: '10px', height: '70px' }} src={cover} />,
        },
        {
          title: '书名',
          dataIndex: 'name',
          ...this.getColumnSearchProps('name'),
        },
        {
          title: '作者',
          dataIndex: 'author',
          ...this.getColumnSearchProps('author'),
        },
        {
          title: '字数',
          dataIndex: 'word',
          sorter: (a, b) => a.word - b.word,
        },
        {
          title: '进度',
          dataIndex: 'gress',
          render: gress => gress ? '已完结' : '连载中',
          filters: [
            {
              text: '已完结',
              value: true,
            },
            {
              text: '连载中',
              value: false,
            },
          ],
          onFilter: (value, record) => record.gress == value
        },
        {
          title: '操作',
          key: 'key',
          dataIndex: 'id',
          render: (id, key, index) => (
            <span>
              <Tag color="green" style={{ cursor: "pointer" }} onClick={this.godetail.bind(this, id)}>
                  <div>
                      <span onClick={this.showModal}>
                          详情
                      </span>
                  </div>
              </Tag>
              <Popconfirm
                title="警告:确认删除这本书吗?"
                icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                onConfirm={this.Confirm.bind(this, id, key.key, index)}
                okText="确认"
                cancelText="取消"
              >
                <Tag color="red" style={{ cursor: "pointer" }} >删除</Tag>
              </Popconfirm>
            </span>
          ),
        },
      ],
      data: [
        {
          key: '',
          cover: '',
          name: '',
          author: '',
          word: '',
          gress: '',
          option: ''
        }
      ]
    }
  }

  Confirm(id, i, index) {
    api.delBook(id).then(res => {
      console.log(res);
      let Darr = this.state.data
      Darr.splice(index, 1)
      this.setState({
        data: Darr
      })
    })
  }
  godetail(id){
    console.log(id);
    console.log('detail');
    this.props.history.push(`/detail/${id}`)
  }
  render() {
    return (
      <div>
        <Table
          columns={this.state.columns}
          dataSource={this.state.data}
          onChange={onChange}
          pagination={{ pageSize: 5 }}
          
        />
      </div>
    )
  }
  componentDidMount() {
    console.log(this);
    let params = {
      name: localStorage.getItem('books'),
      per: 100
    }
    api.booklist(params).then(res => {
      console.log(res.data.products);
      let bookarr = []

      res.data.products.map((item, i) => {
        let desc = item.descriptions.split('/')

        bookarr.push({
          key: i,
          cover: item.coverImg,
          name: desc[0],
          author: desc[1],
          word: item.price,
          gress: Math.floor(Math.random() * 2) == 1 ? true : false,
          id: item._id,
          option: ''
        })
      })

      this.setState({
        data: bookarr,
      })


    })
  }
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          搜索
          </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          重置
          </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });
  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };
}

export default Book








function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}
