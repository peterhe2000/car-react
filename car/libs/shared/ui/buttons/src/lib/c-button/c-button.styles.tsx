import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
export const StyledCButton = styled.div``;

export const useContainerButtonStyles = makeStyles({
  root: {
    marginLeft: '16px',
    clear: 'both',
    lineHeight: 0,
    height: '40px',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#3392ff',
      transition: 'background-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
    },
    '&:active': {
      backgroundColor: '#3392ff',
      transition: 'background-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
    },
    '&:focus': {
      backgroundColor: '#3392ff',
      transition: 'background-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
    }
  },
  containedPrimary: {
    backgroundColor: '#0078FF'
  }
});

export const useOutlinedButtonStyles = makeStyles({
  root: {
    marginLeft: '16px',
    clear: 'both',
    lineHeight: 0,
    height: '40px',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: '#3392ff',
      transition: '#3392ff 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
    },
    '&:active': {
      backgroundColor: 'transparent',
      borderColor: '#3392ff',
      transition: '#3392ff 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
    },
    '&:focus': {
      backgroundColor: 'transparent',
      borderColor: '#3392ff',
      transition: '#3392ff 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
    }
  },
  containedPrimary: {
    backgroundColor: '#0078FF'
  },
  outlinedPrimary: {
    border: '1px solid #0078FF'
  },
  label: {
    color: '#0078FF'
  }
});
