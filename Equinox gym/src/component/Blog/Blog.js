
import { data, cardData } from '../../Data/BlogData';
import { Container, TextWrapper, Title, TopLine, Heading, Subtitle } from '../../globalStyles';
import {
    ArticleSection,
    Featured,
    Trending,
    CarouselSection,
    ImageWrapper,
    CarouselImage,
    CardButton,
    ContentWrapper,
    ContentTitle,
    Content,
    ContentCatogory,
    ContentData,
    SideWrapper,
    ContentImage,
    SideContentWrapper,
    SideTitle,
    SideContent,
    SideCardButton,
    ContentDetails,
    CropCardSection,
    CropCard,
    CardName,

    Date,
    Time,

} from './BlogElements';

const Blog = ({

    topLine,
    headline,
    description,

}) => {

    return (
        <CarouselSection>
            <Container>
                <TextWrapper>
                    <Title>
                        <TopLine >{topLine}</TopLine>
                        <Heading >{headline}</Heading>
                        <Subtitle >{description}</Subtitle>
                    </Title>

                </TextWrapper>

                <ArticleSection>
                    <Featured>
                        {data.map((el, index) => (
                            <ImageWrapper>

                                <CarouselImage src={el.image} />

                                <ContentCatogory>{el.catogory}</ContentCatogory>

                                <ContentWrapper>
                                    <ContentDetails>
                                        <ContentData>
                                            <Date>{el.date}</Date>
                                            <Time>{el.time}</Time></ContentData>
                                        <ContentTitle>{el.title}</ContentTitle>
                                        <Content>{el.description}</Content>

                                        <CardButton>Learn More</CardButton>
                                    </ContentDetails>
                                </ContentWrapper>

                            </ImageWrapper>
                        ))}
                    </Featured>
                    <Trending>
                        {data.map((el, index) => (
                            <SideWrapper>


                                <ContentImage src={el.image} />


                                <SideContentWrapper>

                                    <SideTitle>{el.title}</SideTitle>
                                    <SideContent>{el.description}</SideContent>

                                    <SideCardButton>Learn More</SideCardButton>
                                </SideContentWrapper>
                            </SideWrapper>
                        ))}
                    </Trending>
                </ArticleSection>

                <CropCardSection>
                    {cardData.map((el, index) => (
                        <CropCard><CardName>{el.card}</CardName>

                        </CropCard>
                    ))}
                </CropCardSection>


            </Container>

        </CarouselSection>
    );
};

export default Blog;