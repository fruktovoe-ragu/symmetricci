import { styled } from "styled-components";

interface IChip {
    category: {
        isDone: boolean,
        link: string,
    };
};

const Chip: React.FC<IChip> = ({ category }) => {
    const { isDone, link } = category;

    return (
        <StyledCSBadge style={{ background: isDone ? "#bbeebf" : "#ffbabb"}}>
            {link.length !== 0
                ? <StyledCSBadgeLink href={link}>
                    {isDone ? "Done" : "To do"}
                </StyledCSBadgeLink>
                : <StyledCSBadgeText>
                    {isDone ? "Done" : "To do"}
                </StyledCSBadgeText>
            }
        </StyledCSBadge>
    );
};

export { Chip };

const StyledCSBadge = styled.div`
    border-radius: 40px;
    display: inline-flex;
    font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;
    overflow: hidden;
`;

const StyledCSBadgeLink = styled.a`
    color: #2E3438 !important;
    display: inline-flex;
    padding: 4px 16px;
    text-decoration: none;

    &:hover {
        background: rgba(255, 255, 255, 25.1%);
    }
    &:active {
        background: rgba(0, 0, 0, 5.1%);
    }
`;

const StyledCSBadgeText = styled.a`
    color: #2E3438 !important;
    display: inline-flex;
    padding: 4px 16px;
`;
