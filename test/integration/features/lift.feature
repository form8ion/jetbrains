Feature: Lift

  Scenario: Using a JetBrains IDE, but not configured
    Given a JetBrains IDE is being used
    When the project is lifted
    Then the `runConfigurations` directory is prevented from being ignored

  Scenario: Using a JetBrains IDE, and `runConfigurations` already exists
    Given a JetBrains IDE is being used
    And the runConfigurations directory exists
    When the project is lifted
    Then no error is thrown

  Scenario: Not using a JetBrains IDE
  Scenario: Not using a JetBrains IDE
    Given a JetBrains IDE is not being used
    When the project is lifted
    Then no additional ignores are defined
