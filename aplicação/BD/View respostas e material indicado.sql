-- CREATE VIEW `view_material_indicado` AS
WITH `cte` AS -- Cria uma CTE - Common Table Expression (Resultado temporário)
( 
  SELECT `t`.`id_tentativa`         AS `id_tentativa`, 
         `t`.`id_aluno`             AS `id_aluno`, 
         `a`.`nome`                 AS `nome`, 
         `t`.`id_material`          AS `id_material`, 
         `m`.`nome`                 AS `material`, 
         `t`.`id_questionario`      AS `id_questionario`, 
         `al`.`id_pergunta`         AS `id_pergunta`, 
         `r`.`id_alternativa`       AS `id_alternativa`, 
         `al`.`alternativa_correta` AS `alternativa_correta` 
    FROM `tentativas` `t` 
    JOIN `alunos` `a`        ON `t`.`id_aluno` = `a`.`id_aluno`
    JOIN `materiais` `m`     ON `t`.`id_material` = `m`.`id_material`
    JOIN `respostas` `r`     ON `r`.`id_tentativa` = `t`.`id_tentativa`
    JOIN `alternativas` `al` ON `al`.`id_alternativa` = `r`.`id_alternativa`
-- Importante manter a ordem das perguntas de cada aluno conforme as tentativas para não gerar inconsistências na hora de concatenar as respostas
ORDER BY `a`.`id_aluno`, 
		 `t`.id_Tentativa,
         `al`.`id_pergunta`
) -- Fim da CTE

-- Usa a CTE criada para formatar as respostas 1=correta e 0=errada em uma única string separadas por virgula e seguida do id do material indicado
  SELECT `cte`.`id_questionario` AS `id_questionario`,
		 CONCAT( -- Concatena as respostas das alternativas com o id do material indicado
			    CONVERT( -- Converte a string resposta do group_concat para utf8mb4, porque o antigo utf8 do mysql é incompleto
				        group_concat( -- Concatena todas as respostas separadas por virgula, seguindo o agrupamento do aluno e tentativa
                                    `cte`.`alternativa_correta` separator ','
                                    )
                        using utf8mb4
			            ),
                ',',
                `cte`.`id_material`
		        ) AS `combinacao`
    FROM `cte` 
GROUP BY `cte`.`id_aluno`,
		 `cte`.id_tentativa;