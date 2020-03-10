import React from 'react';
import { useQuery } from 'urql';
import { SPARKLINE as query } from '../Queries/sparklineQuery';
import { Sparkyline } from './Sparkline.module.scss';
import SparkyChart from './Charts/SparkyChart';

const Sparkline = ({ name }) => {
  
    const [state] = useQuery({ query, variables:{name: name} });
    const { data } = state; 

    const additions = [];
    const deletions = [];
    const changedFiles = [];

    if (state.fetching){
        return <p>Loading Sparkline...</p>
    } else if (state.error) {
        return <p>Error: {state.error}</p>
    } else {
        if (data.SparkyBoy.length){
            data.SparkyBoy.reverse().map(commit => {
                return (
                    additions.push(commit.additions),
                    deletions.push(commit.deletions),
                    changedFiles.push(commit.changedFiles)
                )
            });
        } else {
            return (
                <>
                <p>Sparkline unavailable</p>
                </>
            )
        }
    return (
        <div className={Sparkyline}>
            <SparkyChart additions={additions} deletions={deletions} changedFiles={changedFiles}/>
        </div>
    );
  }
};

export default Sparkline;