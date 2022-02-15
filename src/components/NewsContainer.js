import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



export default class NewsContainer extends Component {

    static defaultProps = {
        category: 'general',
        pageSize: 5,

    }

    static propTypes = {
        category: propTypes.string,
        pageSize: propTypes.number
    }
    captilizeFunction = (str) => {
        return str[0].toUpperCase() + str.slice(1)

    }

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalPage: 0,
            pageSize: 12
        }
        document.title = `${this.captilizeFunction(this.props.category) } -  Category`
    }

  

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=37ba772fba854a6f9ccf3122c7822181&page=1&pageSize=${this.state.pageSize}`
        this.setState({
            loading: true
        })
        let rawData = await fetch(url)
        let data = await rawData.json()
        this.setState({
            articles: data.articles,
            loading: false,
            totalPage: data.totalResults,
            page:this.state.page + 1
        })

    }

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=37ba772fba854a6f9ccf3122c7822181&page=${this.state.page}&pageSize=${this.state.pageSize}`
        let rawData = await fetch(url)
        let data = await rawData.json()
        this.setState({
            articles: this.state.articles.concat(data.articles),
            loading: false,
            page:this.state.page + 1
        })

    }




    render() {





        return (
            <>
                <div className="container my-3">
                    <h2 className="text-center">Top Headlines - {this.captilizeFunction(this.props.category)}</h2>
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length!==this.state.totalPage}
                            loader={<Spinner />}
                        >
                    <div className="container">
                       
                            <div className="row">
                                {this.state.articles.map((element) => {
                                    return <div className='col-md-3 text-center' key={element.url}>
                                        <NewsItems urlToImage={element.urlToImage} date={new Date(element.publishedAt).toGMTString()} source={element.source.name} title={element.title} content={element.content} url={element.url} />
                                    </div>
                                })}
                            </div>

                    </div>
                        </InfiniteScroll>
                </div>
            </>
        )
    }
}
