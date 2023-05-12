import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const SimpleAccordions = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className='accordion'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Are free anti-virus software any good?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What exactly are managed IT services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How can I pay for my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>How to track my orders?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Are free anti-virus software any good?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>What exactly are managed IT services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SimpleAccordions;