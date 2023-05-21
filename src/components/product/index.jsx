import { Container, Content, ContentInfo, Description, HomeInfo, HomeTitle, HomeTitleInfo, Icons, ImageContent, Img, Section, SubImages, SubimageContent, UserContent, } from "./style";
import img from "../../assets/images/unsplash_VWcPlbHglYc.png";
import img1 from "../../assets/images/unsplash_ZtC4_rPCRXA.png";


const Product = (props) => {
    return (
        <Container>
            <ImageContent>
                <Img src={img1} />
                <SubimageContent>
                    <SubImages>
                        <Img src={img} />
                        <Img src={img} />
                    </SubImages>
                    <SubImages>
                        <Img src={img} />
                        <Img src={img} />
                    </SubImages>
                </SubimageContent>
            </ImageContent>
            <Content>
                <ContentInfo>
                    <HomeInfo>
                        <HomeTitle>
                            <HomeTitleInfo top>
                                <h2 className="title">
                                    {props.title || "Luxury Family Loft by Victoria Park"}
                                </h2>
                                <p className="subtitle">
                                    {props.info || "Quincy St, Brooklyn, NY, USA"}
                                </p>
                            </HomeTitleInfo>
                            <HomeTitleInfo top>
                                <Icons.Heart />
                            </HomeTitleInfo>
                        </HomeTitle>
                        <HomeTitle end>
                            <HomeTitleInfo>
                                <del>
                                    $2,800/mo
                                </del>
                                <h2 style={{ display: "inline-block" }}>
                                    $7,500/mo
                                </h2>
                            </HomeTitleInfo>
                        </HomeTitle>
                        <HomeTitle>
                            <HomeTitleInfo flex>
                                <div>
                                    <Icons.Bed /> {props.bed || "4 Beds"}
                                </div>
                                <div>
                                    <Icons.Bath /> {props.bath || "5 Bath"}
                                </div>
                                <div>
                                    <Icons.Garage /> {props.garage || "1 Garage"}
                                </div>
                                <div>
                                    <Icons.Ruler /> {props.ruler || "1200 Sq Ft"}
                                </div>
                                <div>
                                    <Icons.Calendar /> {props.calendar || "Year Built: 1800"}
                                </div>
                            </HomeTitleInfo>
                            <HomeTitleInfo>
                                {props.info || "Est. Mortgage"}
                            </HomeTitleInfo>
                        </HomeTitle>
                    </HomeInfo>
                    <Description>
                        <h2 className="title">
                            Description
                        </h2>
                        <p>
                            Occupying over 8,000 square feet, perched over 1,100 feet in the air with absolutely breathtaking panoramic 360-degree views of all of New York City and the surrounding tri-state area, The 82nd Floor at 432 Park Avenue has been completely reimagined by one of the most sought-after design houses in London and represents an utterly unique opportunity to own a globally significant property.

                            The residence is comprised of 5 bedrooms, 2 master bathrooms, 4 on-suite guest bathrooms, 2 powder rooms, 2 offices, 2 dressing rooms, a media room, an oversized eat-in gourmet chef's kitchen, and a sprawling 1,100 square-foot Great Room perfectly situated in the prime southwest corner of the floor.
                        </p>
                        <a href="#">
                            Show more
                        </a>
                    </Description>
                    <Section>
                        <h2 className="title">
                            Documents
                        </h2>
                        <div className="div">
                            <div className="download">
                                <Icons.Download />
                                <p>
                                    test_property.pdf
                                </p>
                                <a href="#">
                                    <h3>
                                        DOWNLOAD
                                    </h3>
                                </a>
                            </div>
                            <div className="download">
                                <Icons.Download />
                                <p>
                                    test_property.pdf
                                </p>
                                <a href="#">
                                    <h3>
                                        DOWNLOAD
                                    </h3>
                                </a>
                            </div>
                            <div className="download">
                                <Icons.Download />
                                <p>
                                    test_property.pdf
                                </p>
                                <a href="#">
                                    <h3>
                                        DOWNLOAD
                                    </h3>
                                </a>
                            </div>
                        </div>
                        <div className="border"></div>
                    </Section>
                    <Section>
                        <h2 className="title">
                            location
                        </h2>
                        <div className="div">
                            <div className="map" map>
                                <div>
                                    <h3>
                                        {props.address || "Address"}:
                                    </h3>
                                    <p>
                                        329 Queensberry Street
                                    </p>
                                </div>
                                <div>
                                    <h3>
                                        {props.address || "Address"}:
                                    </h3>
                                    <p>
                                        329 Queensberry Street
                                    </p>
                                </div>
                                <div>
                                    <h3>
                                        {props.address || "Address"}:
                                    </h3>
                                    <p>
                                        329 Queensberry Street
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Section>
                </ContentInfo>
                <UserContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magnam maiores voluptatum labore libero perspiciatis nisi asperiores, et cumque ab dignissimos non laudantium assumenda eos sapiente error voluptas, perferendis pariatur?
                </UserContent>
            </Content>
        </Container>
    );
}

export default Product;