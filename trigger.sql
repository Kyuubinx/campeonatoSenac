 BEGIN
 IF EXISTS SELECT idTeamHome, idTeamAway FROM game WHERE active = "true" then
         IF NEW.goalHome > NEW.goalAway THEN
             UPDATE ranking
             SET 
             points = points + 3
             goalsPro = goalsPro + NEW.goalHome, 
             goalsTaken = goalsTaken + NEW.goalAway, 
             goalSum = goalsSum - (NEW.goalAway - NEW.goalHome)
             WHERE idTeam = NEW.idTeamHome;
             UPDATE ranking
             SET 
             draw = draw + 1,
             goalsPro = goalsPro + NEW.goalAway, 
             goalsTaken = goalsTaken + NEW.goalHome, 
             goalSum = goalsSum - (NEW.goalHome - NEW.goalAway)
             WHERE idTeam = NEW.idTeamAway;
         ELSEIF NEW.goalHome ==  NEW.goalAway THEN
             UPDATE ranking
             SET pontos = pontos + 1
             goalsPro = goalsPro + NEW.goalAway 
             goalsTaken = goalsTaken + NEW.goalHome 
             WHERE equipe_id IN (NEW.idTeamHome, NEW.idTeamAway);
         END IF;
     END IF;
 END;