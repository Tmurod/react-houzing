import { ContanctInfo, Conteiner, Content, ContentBorder, ContentFooter, ContentInfo, Icons, Section, Subtitle, Text } from "./style"

const Footer = () => {
    return (
        <Section>
            <Conteiner>
                <Content>
                    <ContentInfo>
                        <ContentInfo.ContentText>
                            <Subtitle>
                                Contact Us
                            </Subtitle>
                            <ContanctInfo>
                                <Icons.Location />
                                <Text address>
                                    329 Queensberry Street, North Melbourne VIC 3051, Australia.
                                </Text>
                            </ContanctInfo>
                            <ContanctInfo>
                                <Icons.Phone />
                                <Text address>
                                    123 456 7890
                                </Text>
                            </ContanctInfo>
                            <ContanctInfo>
                                <Icons.Email />
                                <Text address>
                                    support@houzing.com
                                </Text>
                            </ContanctInfo>
                            <ContanctInfo icon>
                                <Icons.Facebook />
                                <Icons.Twitter />
                                <Icons.Instagram />
                                <Icons.Linkedin />
                            </ContanctInfo>
                        </ContentInfo.ContentText>
                        <ContentInfo.ContentText>
                            <Subtitle>
                                Discover
                            </Subtitle>
                            <Text>
                                Chicago
                            </Text>
                            <Text>
                                Los Angeles
                            </Text>
                            <Text>
                                Miami
                            </Text>
                            <Text>
                                New York
                            </Text>
                        </ContentInfo.ContentText>
                        <ContentInfo.ContentText>
                            <Subtitle>
                                Lists by Category
                            </Subtitle>
                            <Text>
                                Apartments
                            </Text>
                            <Text>
                                Condos
                            </Text>
                            <Text>
                                Houses
                            </Text>
                            <Text>
                                Offices
                            </Text>
                            <Text>
                                Retail
                            </Text>
                            <Text>
                                Villas
                            </Text>
                        </ContentInfo.ContentText>
                        <ContentInfo.ContentText>
                            <Subtitle>
                                Lists by Category
                            </Subtitle>
                            <Text>
                                About Us
                            </Text>
                            <Text>
                                Terms & Conditions
                            </Text>
                            <Text>
                                Support Center
                            </Text>
                            <Text>
                                Contact Us
                            </Text>
                        </ContentInfo.ContentText>
                    </ContentInfo>
                    <ContentBorder></ContentBorder>
                    <ContentFooter>
                        <Icons.Logo />
                        <ContanctInfo>
                            <Text address className="address" >
                                Copyright © 2021 CreativeLayers. All Right Reserved.
                            </Text>
                            <Icons.Arrow />
                        </ContanctInfo>
                    </ContentFooter>
                </Content>
            </Conteiner>
        </Section>

    );
}

export default Footer;