export default function News(props) {
    // console.log(props)
    return (
        <div>
            {
                props.newsDataList.map((newsObj, index) => {
                    console.log(newsObj)

                    return (
                        <div key={index} className="news">
                            <div>
                                <img src={newsObj.imgUrl} width={350} />
                            </div>

                            <div>
                                <h3>{newsObj.specTheme}</h3>
                                <h2>{newsObj.headline}</h2>
                                <ul>
                                    {
                                        newsObj.relatedNews.map((news, index) => {
                                            return <li key={index}>{news}</li>
                                        })
                                    } 

                                </ul>
                                <p> Há {newsObj.timePublisher} - Em {newsObj.generalTheme}</p>    
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
