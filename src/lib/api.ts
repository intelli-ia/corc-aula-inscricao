interface RegistrationPayload {
  nome: string;
  whatsapp: string;
}

const WEBHOOK_URL = 'https://webhooks.intelliai.com.br/webhook/9dea8b06-e046-4744-8c24-24997598069f';

export async function sendRegistration(data: RegistrationPayload): Promise<void> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      // Tentar extrair mensagem de erro do servidor
      let errorMessage = 'Erro ao processar inscrição';
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
        errorMessage = `Erro ${response.status}: ${response.statusText}`;
      }
      throw new Error(errorMessage);
    }

    // Sucesso - webhook pode retornar 200, 201 ou 204
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Tempo de espera esgotado. Verifique sua conexão.');
      }
      throw error;
    }
    throw new Error('Erro de rede. Verifique sua conexão.');
  }
}
