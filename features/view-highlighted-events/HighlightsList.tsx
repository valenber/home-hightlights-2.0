import React from 'react';
import { Paper, Card, CardContent, Typography } from '@material-ui/core';
import { AgendaEvent } from '../../data/dbSchema';
import { useSelector } from 'react-redux';
import { getHighlightsForSelectedCategory } from '../../store/selectors/getHighlightsForSelectedCategory';

export const HighlightsList: React.FC = () => {
  const categoryHighlights = useSelector(getHighlightsForSelectedCategory);

  return (
    <Paper className="highlightsGrid">
      {categoryHighlights.map((event: AgendaEvent) => {
        const formattedEndDate = new Intl.DateTimeFormat('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }).format(new Date(event.end));

        return (
          <Card className="eventCard" key={event.id} variant="elevation">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {formattedEndDate}
              </Typography>

              <Typography gutterBottom variant="h6" component="h3">
                {event.name}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Paper>
  );
};
