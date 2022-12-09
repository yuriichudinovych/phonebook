import styled from '@emotion/styled';
export const Container = styled.div`
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.muted};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.md};
  margin: 0 auto;
  max-width: 350px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const SecondTitle = styled.h2`
  text-align: center;
  padding: 0 0 ${p => p.theme.space[4]}px 0;
`;
